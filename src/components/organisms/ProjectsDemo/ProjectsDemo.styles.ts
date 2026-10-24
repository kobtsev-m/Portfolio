import styled from 'styled-components';
import { rgba } from 'polished';

export const DemoTitle = styled.h3`
  color: ${({ theme }) => rgba(theme.color.font, 0.8)};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 0.28rem;
  line-height: 0.36rem;
  text-transform: uppercase;
`;
