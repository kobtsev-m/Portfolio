import styled from 'styled-components';
import { rgba } from 'polished';
import { mediaStyles } from '~/styles';

export const Title = styled.h1`
  position: absolute;
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: 800;
  font-size: 1em;
  line-height: 1.36em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  z-index: 900;
  &:nth-of-type(1) {
    top: 0;
    color: ${({ theme }) => rgba(theme.color.secondary, 0.7)};
  }
  &:nth-of-type(2) {
    top: 1em;
    color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  }
  &:nth-of-type(3) {
    top: 2em;
    color: ${({ theme }) => rgba(theme.color.accent, 0.9)};
  }
`;

export const Line = styled.div`
  position: absolute;
  top: 2.75rem;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => rgba(theme.color.font, 0.7)};
`;

export const Wrapper = styled.div<{ align?: string }>`
  position: relative;
  height: 3.5em;
  font-size: 0.7rem;
  ${mediaStyles('sm', 'font-size: 0.8rem')};
  ${mediaStyles('md', 'font-size: 1rem')};
  ${Title} {
    right: ${(props) => (props.align === 'right' ? 0 : '')};
    left: ${(props) => (props.align === 'left' ? 0 : '')};
  }
`;
