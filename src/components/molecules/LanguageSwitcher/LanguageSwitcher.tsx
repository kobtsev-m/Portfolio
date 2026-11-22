import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WorldIcon } from '~/assets';
import { Box, ClearButton, CustomIcon } from '~/components/atoms';
import { LANGUAGES, currentLanguage } from '~/locales/i18n';
import { Code, Menu, Option, Root } from './LanguageSwitcher.styles';

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = currentLanguage();

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent && e.key !== 'Escape') return;
      if (e instanceof MouseEvent && rootRef.current?.contains(e.target as Node))
        return;
      setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  const choose = async (code: string) => {
    setOpen(false);
    await i18n.changeLanguage(code);
    document.documentElement.lang = code;
  };

  return (
    <Root ref={rootRef}>
      <ClearButton
        onClick={() => setOpen(!open)}
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-label='Language'
      >
        <Box mr={{ xs: '0', lg: '0.2rem' }}>
          <CustomIcon src={WorldIcon} width='45px' height='45px' />
        </Box>
        <Box hideAt='lg'>{current.toUpperCase()}</Box>
      </ClearButton>
      {open && (
        <Menu role='listbox'>
          {LANGUAGES.map(({ code, label }) => (
            <li key={code}>
              <Option
                type='button'
                role='option'
                aria-selected={code === current}
                active={code === current}
                onClick={() => choose(code)}
              >
                <span>{label}</span>
                <Code>{code}</Code>
              </Option>
            </li>
          ))}
        </Menu>
      )}
    </Root>
  );
};
