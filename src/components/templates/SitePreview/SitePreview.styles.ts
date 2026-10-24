import styled from 'styled-components';
import { rgba } from 'polished';

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 94vw;
  height: 92vh;
  background-color: ${({ theme }) => theme.color.layout};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.35);
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.15rem 0.2rem 0.15rem 0.35rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.thin};
  font-family: ${({ theme }) => theme.font.montserrat};
`;

// Title and subtitle are centred on each other vertically (not baseline-aligned).
export const Title = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  overflow: hidden;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.font};
  font-size: 0.28rem;
  font-weight: 600;
  span {
    font-size: 0.22rem;
    font-weight: 400;
    opacity: 0.6;
  }
`;

export const OpenLink = styled.a`
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  color: ${({ theme }) => theme.color.accent};
  font-size: 0.22rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid ${({ theme }) => rgba(theme.color.accent, 0.6)};
  border-radius: 6px;
  padding: 0.05rem 0.16rem;
  white-space: nowrap;
  &:hover {
    background-color: ${({ theme }) => rgba(theme.color.accent, 0.1)};
  }
  svg {
    width: 0.24rem;
    height: 0.24rem;
    flex: none;
  }
`;

export const CloseButton = styled.button`
  flex: none;
  width: 0.6rem;
  height: 0.6rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${({ theme }) => theme.color.font};
  font-size: 0.4rem;
  line-height: 1;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.color.thin};
  }
`;

export const FrameBox = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  background-color: #fff;
`;

export const Frame = styled.iframe`
  flex: 1;
  width: 100%;
  border: none;
  background-color: transparent;
`;

// Shown behind the frame until the site reports it has loaded; slow sites otherwise look blank.
export const Loading = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1b1b1b;
  font-family: ${({ theme }) => theme.font.montserrat};
  font-size: 0.28rem;
  opacity: 0.6;
  pointer-events: none;
`;

export const SnapshotScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
  img {
    display: block;
    width: 100%;
  }
`;
