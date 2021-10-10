import styled from 'styled-components';
import { Breakpoint, Ruleset } from '~/types';
import { mediaStyles, mediaProperty } from '~/styles';

type AlignType = 'center' | 'start' | 'end' | 'between' | 'around';

interface BoxProps {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: number;
  height?: number;
  flex?: boolean;
  flexWrap?: boolean;
  flexDirection?: 'column' | 'row';
  align?: AlignType | Ruleset<AlignType>;
  justify?: AlignType | Ruleset<AlignType>;
  hideAt?: Breakpoint;
  showAt?: Breakpoint;
  p?: string | Ruleset;
  pt?: string | Ruleset;
  pb?: string | Ruleset;
  pr?: string | Ruleset;
  pl?: string | Ruleset;
  m?: string | Ruleset;
  mt?: string | Ruleset;
  mb?: string | Ruleset;
  mr?: string | Ruleset;
  ml?: string | Ruleset;
}

export const Box = styled.div<BoxProps>`
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  transform: ${({ right }) => right === '50%' && 'translateX(-50%)'};
  width: ${({ width }) => width && `${width}%`};
  height: ${({ height }) => height && `${height}%`};
  display: ${({ flex, hideAt }) =>
    hideAt ? 'none' : flex ? 'flex' : 'block'};
  ${({ flex, hideAt }) =>
    hideAt && mediaStyles(hideAt, `display: ${flex ? 'flex' : 'block'}`)};
  ${({ showAt }) => showAt && mediaStyles(showAt, 'display: none !important')};
  flex-wrap: ${({ flexWrap }) => flexWrap && 'wrap'};
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ align }) => mediaProperty('align-items', align)};
  ${({ justify }) => mediaProperty('justify-content', justify)};
  ${({ p }) => mediaProperty('padding', p)};
  ${({ pt }) => mediaProperty('padding-top', pt)};
  ${({ pb }) => mediaProperty('padding-bottom', pb)};
  ${({ pr }) => mediaProperty('padding-right', pr)};
  ${({ pl }) => mediaProperty('padding-left', pl)};
  ${({ m }) => mediaProperty('margin', m)};
  ${({ mt }) => mediaProperty('margin-top', mt)};
  ${({ mb }) => mediaProperty('margin-bottom', mb)};
  ${({ mr }) => mediaProperty('margin-right', mr)};
  ${({ ml }) => mediaProperty('margin-left', ml)};
`;
