import styled from 'styled-components';
import { mediaStyles, mobileThinBorderCss } from '~/styles';
import { rgba } from 'polished';

export const IntroWrapper = styled.section`
  height: auto;
  ${mediaStyles('lg', 'height: calc(100vh - 140px - 0.2rem)')};
`;

export const IntroTextBlock = styled.div`
  width: 100%;
  ${mediaStyles('lg', 'width: 90%')};
  ${mediaStyles('xl', 'width: 75%')};
  ${mobileThinBorderCss};
`;

export const IntroAvatarBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mediaStyles('lg', 'justify-content: flex-end;')};
  ${mobileThinBorderCss};
`;

export const IntroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.montserrat};
  font-weight: 600;
  font-size: 0.7rem;
  line-height: 0.85rem;
  margin-bottom: 0.2rem;
`;

export const IntroSubTitle = styled.h2`
  color: ${({ theme }) => rgba(theme.color.accent, 0.9)};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-weight: bold;
  font-size: 0.32rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.25rem;
`;

export const IntroDescription = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
`;

export const AvatarSvg = styled.svg`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  mask-size: contain;
  ${mediaStyles('lg', 'height: min(550px, 65vh)')}
`;

export const AvatarJpg = styled.div<{ src: string }>`
  opacity: 0;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  background: ${({ src }) => `url(${src})`} center no-repeat;
  background-size: cover;
  ${mediaStyles('lg', 'height: min(550px, 65vh)')};
`;
