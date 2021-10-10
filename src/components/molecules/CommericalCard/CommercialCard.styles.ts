import styled from 'styled-components';
import { rgba } from 'polished';
import { Box } from '~/components/atoms';
import { mediaStyles } from '~/styles';

export const CardTitle = styled.h3<{ icon?: string }>`
  position: relative;
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.openSans};
  font-style: normal;
  font-weight: 300;
  font-size: 0.4rem;
  line-height: 0.54rem;
  padding: 0.25rem 0;
  margin-left: 1.3rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1.3rem;
    transform: translateY(-50%);
    width: 1rem;
    height: 100%;
    background: ${({ icon }) => `url(${icon}) center no-repeat`};
    background-size: 100% auto;
  }
`;

export const CardSubTitle = styled.h4`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.openSans};
  font-style: normal;
  font-weight: normal;
  font-size: 0.35rem;
  line-height: 0.54rem;
  margin: 0.2rem 0;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.2rem;
`;

export const PreviewImage = styled.div<{ src?: string }>`
  width: 100%;
  height: 4rem;
  background-image: ${({ src }) => `url(${src})`};
  background-color: #fff;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 95% auto;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: filter ease-in-out 0.2s;
  ${mediaStyles('lg', 'border: none')};
`;

export const OverflowLink = styled.a<{ y: string }>`
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5rem;
  color: #fff;
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: 400;
  text-align: center;
  text-decoration: none;
  background-color: rgba(196, 196, 196, 0.2);
  border-radius: 6px;
  padding: 0.25rem;
  opacity: 0;
  transition: opacity ease-in-out 0.2s;
  &:nth-child(2n + 1) {
    transform: translate(-50%, calc(-50% ${({ y }) => y}));
  }
  &:nth-child(2n) {
    transform: translate(-50%, calc(-50% ${({ y }) => y}));
  }
`;

export const TechnologiesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  ${mediaStyles('lg', 'flex-direction: row')}
`;

export const TechnologiesListItem = styled.li`
  color: ${({ theme }) => rgba(theme.color.accent, 0.8)};
  margin: 0 0 0.2rem 0;
  ${mediaStyles('lg', 'margin: 0 0.2rem 0 0')}
`;

export const Wrapper = styled(Box)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.layout};
  border-radius: 10px;
  &:hover ${PreviewImage} {
    filter: brightness(0.17);
    transition: filter ease-in-out 0.2s;
  }
  &:hover ${OverflowLink} {
    display: block;
    opacity: 1;
    transition: opacity ease-in-out 0.2s;
  }
`;
