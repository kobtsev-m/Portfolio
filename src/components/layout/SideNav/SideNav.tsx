import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useWindowSize } from 'hooks/useWindowSize';
import { SideIcon, SideLine } from './SideNav.styles';

export default function SideNav() {
  const [lineOffset, setLineOffset] = useState<number>(0);
  const windowSize = useWindowSize();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (windowSize.width && container.current) {
      const containerWidth = container.current.offsetWidth;
      const windowWidth = windowSize.width;
      setLineOffset((windowWidth - containerWidth) / 4);
    }
  }, [windowSize, container]);

  if (lineOffset < 70) {
    return <Container ref={container}></Container>;
  }

  return (
    <Container ref={container}>
      <SideLine bottom='0' left={`${lineOffset}px`} height='185px' />
      <SideLine top='0' right={`${lineOffset}px`} height='320px' />
      <SideLine bottom='0' right={`${lineOffset}px`} height='320px' />
      <a href='https://t.me/kobtsev_m' rel='noreferrer' target='_blank'>
        <SideIcon
          src='/img/icons/telegram-brands.svg'
          bottom='210px'
          left={`${lineOffset - 25}px`}
          width='50px'
          height='50px'
        />
      </a>
      <a href='https://github.com/kobtsev-m' rel='noreferrer' target='_blank'>
        <SideIcon
          src='/img/icons/github-brands.svg'
          bottom='275px'
          left={`${lineOffset - 25}px`}
          width='50px'
          height='50px'
        />
      </a>
    </Container>
  );
}