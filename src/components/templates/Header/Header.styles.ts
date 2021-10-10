import styled from 'styled-components';
import { mediaStyles } from '~/styles';

export const Navbar = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  ${mediaStyles('md', 'height: 110px')};
  background: ${({ theme }) => theme.color.background};
  margin-top: 0;
  ${mediaStyles('lg', 'margin-top: 0.2rem')};
  z-index: 1000;
`;
