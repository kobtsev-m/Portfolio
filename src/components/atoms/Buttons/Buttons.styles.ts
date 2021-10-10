import { HTMLAttributes } from 'react';
import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import { rgba } from 'polished';

type HtmlButtonProps = HTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends HtmlButtonProps {
  width?: number;
  isLoading?: boolean;
}

export const ClearButton = styled.button<ButtonProps>`
  width: ${({ width }) => `${width}%`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.24rem;
  line-height: 0.32rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.font};
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

interface CustomButtonSpanProps {
  color?: keyof DefaultTheme['color'];
}

export const CustomButtonSpan = styled.span<CustomButtonSpanProps>`
  position: absolute;
  width: 100%;
  height: 25%;
  transform: translateX(-150%);
  transition: 0.5s;
  z-index: -1;
  ${({ color }) =>
    color &&
    css`
      background-color: ${({ theme }) => rgba(theme.color[color], 0.7)};
    `}
  ${({ color }) =>
    !color &&
    css`
      background-color: ${({ theme }) => rgba(theme.color.accent, 0.7)};
    `}
  &:nth-child(1) {
    top: 0;
    transition-delay: 0s;
  }
  &:nth-child(2) {
    top: 25%;
    transition-delay: 0.1s;
  }
  &:nth-child(3) {
    top: 50%;
    transition-delay: 0.2s;
  }
  &:nth-child(4) {
    top: 75%;
    transition-delay: 0.3s;
  }
`;

export interface CustomButtonProps extends ButtonProps {
  width?: number;
  color?: keyof DefaultTheme['color'];
  size?: 'sm' | 'lg';
  disabled?: boolean;
  submitted?: boolean;
}

export const CustomButton = styled(ClearButton)<CustomButtonProps>`
  position: relative;
  font-weight: 600;
  background: transparent;
  border-style: solid;
  border-radius: 10px;
  overflow: hidden;
  z-index: 1;
  padding: 0.6em 2em;
  transition: all 0.25s ease-in-out;
  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => rgba(theme.color[color], 0.7)};
      border-color: ${({ theme }) => rgba(theme.color[color], 0.7)};
    `}
  ${({ color }) =>
    !color &&
    css`
      color: ${({ theme }) => rgba(theme.color.accent, 0.7)};
      border-color: ${({ theme }) => rgba(theme.color.accent, 0.7)};
    `}
  ${({ size }) =>
    size === 'sm' &&
    css`
      border-width: 5px;
    `}
  ${({ size }) =>
    size === 'lg' &&
    css`
      border-width: 15px;
    `}
  ${({ size }) =>
    !size &&
    css`
      border-width: 8px;
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
  ${({ disabled, color }) =>
    !disabled &&
    color &&
    css`
      &:hover {
        color: ${({ theme }) => theme.color.background};
        background-color: ${({ theme }) => theme.color[color]};
        transition: all 0.25s ease-in-out;
      }
    `}
  ${({ disabled, color }) =>
    !disabled &&
    !color &&
    css`
      &:hover {
        color: ${({ theme }) => theme.color.background};
        background-color: ${({ theme }) => theme.color.accent};
        transition: all 0.25s ease-in-out;
      }
    `}
  ${({ submitted }) =>
    submitted &&
    css`
      cursor: default;
    `}
`;

export const SubmitButtonWrapper = styled(CustomButton)`
  height: 0.7rem;
`;

export const BorderButtonWrapper = styled(ClearButton)`
  font-size: 0.2rem;
  line-height: 0.32rem;
  width: 100%;
  height: 3em;
  font-family: ${({ theme }) => theme.font.openSans};
  font-weight: bold;
  letter-spacing: 0.1em;
  background: transparent;
  color: ${({ theme }) => rgba(theme.color.font, 0.7)};
  border: 3px solid ${({ theme }) => rgba(theme.color.font, 0.7)};
  border-radius: 10px;
  cursor: pointer;
  padding: 0 2em;
  transition: all 0.25s ease-in-out;
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.color.font};
    color: ${({ theme }) => theme.color.background};
    transition: all 0.25s ease-in-out;
  }
`;

const scrollAnimation = keyframes`
  0% {
    opacity: 0;
    height: 6px;
  }
  40% {
    opacity: 1;
    height: 10px;
  }
  80% {
    transform: translate(0, 20px);
    height: 10px;
    opacity: 0;
  }
  100% {
    height: 3px;
    opacity: 0;
  }
`;

const pulseAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
`;

export const ScrollButtonWrapper = styled.button`
  position: relative;
  width: 30px;
  height: 50px;
  background: transparent;
  border: 3px solid ${({ theme }) => theme.color.font};
  border-radius: 50px;
  margin: 0 0 15px 15px;
  opacity: 0.8;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    bottom: 30px;
    left: 50%;
    width: 4px;
    height: 4px;
    background: ${({ theme }) => rgba(theme.color.font, 0.9)};
    border-radius: 100%;
    margin-left: -2px;
    animation: ${scrollAnimation} 2s infinite;
  }
`;

export const ScrollButtonChevronsWrapper = styled.div`
  padding: 6px 0 0 0;
  margin-left: -3px;
  margin-top: 48px;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScrollButtonChevron = styled.div`
  margin-top: -4px;
  position: relative;
  border: solid ${({ theme }) => theme.color.font};
  border-width: 0 3px 3px 0;
  display: inline-block;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  &:nth-child(odd) {
    animation: ${pulseAnimation} 500ms ease infinite alternate;
  }
  &:nth-child(even) {
    animation: ${pulseAnimation} 500ms ease infinite alternate 250ms;
  }
`;
