import styled from 'styled-components';
import { mediaStyles, mobileThinBorderCss } from '~/styles';
import { CaretDarkIcon, CaretLightIcon } from '~/assets';

export const AboutText = styled.p`
  width: 100%;
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  ${mediaStyles('md', 'width: 80%')};
  ${mobileThinBorderCss}
`;

export const TechnologiesBlock = styled.div`
  ${mobileThinBorderCss}
`;

export const TechnologiesList = styled.ul`
  list-style: none;
`;

interface TechnologiesListItemProps {
  opacity?: number;
}

const getListIcon = (themeName: string) => {
  return `url(${themeName === 'dark' ? CaretDarkIcon : CaretLightIcon})`;
};

export const TechnologiesListItem = styled.li<TechnologiesListItemProps>`
  position: relative;
  font-size: 0.24rem;
  margin: 0 0 0.3rem 0.4rem;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.4rem;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 0.4rem;
    background: ${({ theme }) => getListIcon(theme.name)} center no-repeat;
    background-size: cover;
    opacity: ${({ opacity }) => `${opacity}%`};
  }
`;
