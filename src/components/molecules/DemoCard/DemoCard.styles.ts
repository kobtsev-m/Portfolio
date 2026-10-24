import styled from 'styled-components';
import { rgba } from 'polished';
import { mediaStyles } from '~/styles';
import { Box } from '~/components/atoms';

export const Wrapper = styled(Box)`
  display: block;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.layout};
  border: 1px solid transparent;
  border-radius: 10px;
  text-decoration: none;
  transition: border-color ease-in-out 0.2s, transform ease-in-out 0.2s;
  &[href]:hover {
    border-color: ${({ theme }) => rgba(theme.color.accent, 0.6)};
    transform: translateY(-2px);
  }
`;

export const SiteIcon = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 22%;
`;

export const IconsHeader = styled.div`
  position: relative;
  height: 60px;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 0.24rem;
  line-height: 0.29rem;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-style: normal;
  font-weight: 300;
  font-size: 0.2rem;
  line-height: 0.29rem;
  margin: 0.15rem 0;
`;

export const TechnologiesList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  ${mediaStyles('lg', 'flex-direction: row')}
`;

export const TechnologiesListItem = styled.li`
  color: ${({ theme }) => rgba(theme.color.font, 0.5)};
  white-space: nowrap;
  margin: 0 0 0.2rem 0;
  ${mediaStyles('lg', 'margin: 0 0.2rem 0.1rem 0')}
`;
