import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
`;

export const Menu = styled.ul`
  position: absolute;
  top: calc(100% + 0.24rem);
  left: 0;
  z-index: 20;
  min-width: 1.9rem;
  margin: 0;
  padding: 0.06rem 0;
  list-style: none;
  background: ${({ theme }) => theme.color.layout};
  border: 1px solid ${({ theme }) => theme.color.thin};
  border-radius: 0.08rem;
  box-shadow: 0 0.06rem 0.24rem rgba(0, 0, 0, 0.18);
`;

export const Option = styled.button<{ active: boolean }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.2rem;
  padding: 0.08rem 0.18rem;
  border: 0;
  background: none;
  cursor: pointer;
  font: inherit;
  font-size: 0.2rem;
  text-transform: none;
  text-align: left;
  color: ${({ theme, active }) =>
    active ? theme.color.accent : theme.color.font};
  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.color.thin};
    outline: none;
  }
`;

export const Code = styled.span`
  color: ${({ theme }) => theme.color.lightGrey};
  text-transform: uppercase;
`;
