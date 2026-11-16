import {
  createContext,
  CSSProperties,
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { pageSnapshots } from '~/constants';
import {
  Backdrop,
  Panel,
  Bar,
  Title,
  OpenLink,
  CloseButton,
  Frame,
  FrameBox,
  Loading,
  SnapshotScroll,
  Zoom
} from './SitePreview.styles';

// These sites refuse to be shown in an iframe (X-Frame-Options), so their links open in a new tab.
const NOT_EMBEDDABLE = ['businesswaretech.com', 'amdb.online'];

const canEmbed = (url: string) => {
  const { hostname } = new URL(url);
  return !NOT_EMBEDDABLE.some(
    (host) => hostname === host || hostname.endsWith(`.${host}`)
  );
};

// Businessware case-study snapshots are tall pages; these can be zoomed out to see more at once.
const ZOOMABLE = ['businesswaretech.com'];
const ZOOM_MIN = 40;
const ZOOM_MAX = 100;
const ZOOM_DEFAULT = 80;
const ZOOM_STEP = 10;

const isZoomable = (url: string) => {
  const { hostname } = new URL(url);
  return ZOOMABLE.some(
    (host) => hostname === host || hostname.endsWith(`.${host}`)
  );
};

interface Preview {
  url: string;
  title: string;
  // Shown next to the title, e.g. "Official website".
  subtitle?: string;
  // A full-page image shown instead of a live frame, for pages that can't be embedded.
  snapshot?: string;
}

const SitePreviewContext = createContext<(preview: Preview) => void>(() => {});

/** Opens any URL (e.g. a same-site PDF) in the preview popup. */
export const useOpenPreview = () => useContext(SitePreviewContext);

/** Returns an onClick that opens the link in the preview popup; modified clicks still open a new tab. */
export const useSitePreview = () => {
  const open = useContext(SitePreviewContext);
  return (url: string, title: string, subtitle?: string) =>
    (e: MouseEvent<HTMLAnchorElement>) => {
      const modified = e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0;
      const snapshot = pageSnapshots[url];
      if (modified || (!snapshot && !canEmbed(url))) return;
      e.preventDefault();
      open({ url, title, subtitle, snapshot });
    };
};

export const SitePreviewProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [preview, setPreview] = useState<Preview | null>(null);
  const [loaded, setLoaded] = useState(false);
  // Kept between popups so a reader who zoomed out once doesn't have to repeat it on every case study.
  const [zoom, setZoom] = useState(ZOOM_DEFAULT);
  const { t } = useTranslation();
  const close = useCallback(() => setPreview(null), []);

  useEffect(() => setLoaded(false), [preview]);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [preview, close]);

  const zoomable = !!preview?.snapshot && isZoomable(preview.url);
  // Chrome never fires onLoad for a PDF in a frame, and its viewer paints its own dark background at once.
  const isPdf = !!preview && /\.pdf($|[?#])/i.test(preview.url);
  const frameReady = loaded || isPdf;
  const changeZoom = (delta: number) =>
    setZoom((z) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z + delta)));

  return (
    <SitePreviewContext.Provider value={setPreview}>
      {children}
      {preview && (
        <Backdrop onClick={close}>
          <Panel
            role='dialog'
            aria-modal='true'
            aria-label={preview.title}
            onClick={(e) => e.stopPropagation()}
          >
            <Bar>
              <Title>
                {preview.title}
                {preview.subtitle && <span>{preview.subtitle}</span>}
              </Title>
              <OpenLink href={preview.url} target='_blank' rel='noreferrer'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  aria-hidden='true'
                >
                  <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
                  <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
                </svg>
                <span className='full'>{t('preview.openInNewTab')}</span>
                <span className='short'>{t('preview.open')}</span>
              </OpenLink>
              {zoomable && (
                <Zoom>
                  <button
                    onClick={() => changeZoom(-ZOOM_STEP)}
                    disabled={zoom <= ZOOM_MIN}
                    aria-label={t('preview.zoomOut')}
                  >
                    −
                  </button>
                  <button
                    className='value'
                    onClick={() => setZoom(ZOOM_DEFAULT)}
                    aria-label={t('preview.zoomReset')}
                  >
                    {zoom}%
                  </button>
                  <button
                    onClick={() => changeZoom(ZOOM_STEP)}
                    disabled={zoom >= ZOOM_MAX}
                    aria-label={t('preview.zoomIn')}
                  >
                    +
                  </button>
                </Zoom>
              )}
              <CloseButton onClick={close} aria-label={t('preview.close')}>
                ×
              </CloseButton>
            </Bar>
            {preview.snapshot ? (
              <SnapshotScroll>
                <img
                  src={preview.snapshot}
                  alt={preview.title}
                  // Applied on desktop only, via the CSS variable (see SnapshotScroll).
                  style={
                    zoomable
                      ? ({ '--snapshot-zoom': `${zoom}%` } as CSSProperties)
                      : undefined
                  }
                />
              </SnapshotScroll>
            ) : (
              <FrameBox $loaded={frameReady}>
                {!frameReady && <Loading>{t('preview.loading')}</Loading>}
                <Frame
                  src={preview.url}
                  title={preview.title}
                  referrerPolicy='no-referrer'
                  onLoad={() => setLoaded(true)}
                />
              </FrameBox>
            )}
          </Panel>
        </Backdrop>
      )}
    </SitePreviewContext.Provider>
  );
};
