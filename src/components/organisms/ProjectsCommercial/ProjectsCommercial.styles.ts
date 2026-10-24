import styled from 'styled-components';
import { rgba } from 'polished';
import { Box } from '~/components/atoms';

export const EmployerWrapper = styled(Box)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.layout};
  border-left: 4px solid ${({ theme }) => theme.color.accent};
  border-radius: 10px;
`;

export const EmployerTitle = styled.a`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: 300;
  font-size: 0.4rem;
  line-height: 0.54rem;
  text-decoration: none;
`;

export const EmployerSubTitle = styled.h4`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: normal;
  font-size: 0.35rem;
  line-height: 0.54rem;
  margin: 0.15rem 0;
`;

export const EmployerPeriod = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.26rem;
  line-height: 0.4rem;
  letter-spacing: 0.04em;
  opacity: 0.6;
  margin-bottom: 0.2rem;
`;

export const EmployerText = styled.p`
  color: ${({ theme }) => theme.color.font};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  margin-bottom: 0.2rem;
`;

export const EmployerLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.12rem;
  color: ${({ theme }) => theme.color.accent};
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  font-weight: 600;
  line-height: 0.44rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  border: 1px solid ${({ theme }) => rgba(theme.color.accent, 0.6)};
  border-radius: 6px;
  padding: 0.08rem 0.25rem;
  margin-top: 0.1rem;
  transition: background-color ease-in-out 0.2s;
  &:hover {
    background-color: ${({ theme }) => rgba(theme.color.accent, 0.1)};
  }
  svg {
    width: 0.3rem;
    height: 0.3rem;
    flex: none;
  }
`;
