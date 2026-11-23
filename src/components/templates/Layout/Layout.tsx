import { FC, ReactNode, useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '~/styles';
import { Theme } from '~/types';
import { SideNav, Header, SitePreviewProvider } from '~/components/templates';
import '~/locales/i18n';

const readSavedTheme = (): Theme | null => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === Theme[Theme.Dark]) return Theme.Dark;
    if (saved === Theme[Theme.Light]) return Theme.Light;
  } catch {}
  return null;
};

const initialTheme = (): Theme => {
  const saved = readSavedTheme();
  if (saved !== null) return saved;
  const prefersDark = window.matchMedia?.(
    '(prefers-color-scheme: dark)'
  ).matches;
  return prefersDark ? Theme.Dark : Theme.Light;
};

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  // An explicit choice (saved in localStorage) wins; otherwise follow the OS / browser theme.
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    try {
      localStorage.setItem('theme', Theme[newTheme]);
    } catch {}
    setTheme(newTheme);
  };

  useEffect(() => {
    const media = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!media) return;
    const onChange = (e: MediaQueryListEvent) => {
      if (!readSavedTheme()) {
        setTheme(e.matches ? Theme.Dark : Theme.Light);
      }
    };
    media.addEventListener?.('change', onChange);
    return () => media.removeEventListener?.('change', onChange);
  }, []);

  return (
    <Suspense fallback='Loading...'>
      <ThemeProvider theme={theme === Theme.Dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <SitePreviewProvider>
          <SideNav />
          <Header theme={theme} toggleTheme={toggleTheme} />
          <main>{children}</main>
        </SitePreviewProvider>
      </ThemeProvider>
    </Suspense>
  );
};
