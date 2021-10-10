import { css } from 'styled-components';
import { mediaStyles } from '~/styles';

export const mobileThinBorderCss = css`
  border: 1px solid ${({ theme }) => theme.color.thin};
  border-radius: 10px;
  padding: 0.4rem;
  ${mediaStyles(
    'md',
    css`
      text-align: left;
      border: none;
      border-radius: 0;
      padding: 0;
    `
  )}
`;
