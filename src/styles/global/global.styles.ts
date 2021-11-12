import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { mediaStyles } from '../media/media.styles';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.font};
    font-family: ${({ theme }) => theme.font.montserrat};
    font-size: 0.2rem;
    overflow-x: hidden;
  }
  :root {
    ${mediaStyles('xs', 'font-size: 55px')};
    ${mediaStyles('sm', 'font-size: 60px')};
    ${mediaStyles('md', 'font-size: 65px')};
    ${mediaStyles('lg', 'font-size: 70px')};
    ${mediaStyles('xl', 'font-size: 75px')};
    ${mediaStyles('xxl', 'font-size: 80px')};
  }
  hr {
      border: none;
      height: 1px;
      background-color: ${({ theme }) => rgba(theme.color.font, 0.8)};
  }
  a {
      text-decoration: none;
      color: inherit;
  }
`;
