import { FC, ReactNode, useState, useEffect, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from '~/styles';
import { Theme } from '~/types';
import { SideNav, Header } from '~/components/templates';
import '~/locales/i18n';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState(Theme.Dark);

  const toggleTheme = () => {
    const newTheme = theme === Theme.Dark ? Theme.Light : Theme.Dark;
    localStorage.setItem('theme', Theme[newTheme]);
    setTheme(newTheme);
  };

  useEffect(() => {
    if (localStorage.getItem('theme') !== Theme[Theme.Dark]) {
      setTheme(Theme.Light);
    }
  }, []);

  return (
    <Suspense fallback='Loading...'>
      <ThemeProvider theme={theme === Theme.Dark ? darkTheme : lightTheme}>
        <GlobalStyles />
        <SideNav />
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>{children}</main>
      </ThemeProvider>
    </Suspense>
  );
};
