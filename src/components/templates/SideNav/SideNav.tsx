import { FC } from 'react';
import { Container } from '~/components/atoms';
import { useContainerOffset } from '~/hooks';
import { GithubIcon, GitlabIcon } from '~/assets';
import { SideIcon, SideLine } from './SideNav.styles';

export const SideNav: FC = () => {
  const { containerOffset, containerRef } = useContainerOffset();

  if (containerOffset < 140) {
    return <Container ref={containerRef} />;
  }

  return (
    <Container ref={containerRef}>
      <SideLine bottom='0' left={`${containerOffset / 2}px`} height='185px' />
      <SideLine top='0' right={`${containerOffset / 2}px`} height='320px' />
      <SideLine bottom='0' right={`${containerOffset / 2}px`} height='320px' />
      <a href='https://gitlab.com/kobtsev-m' rel='noreferrer' target='_blank'>
        <SideIcon
          src={GitlabIcon}
          bottom='202px'
          left={`${containerOffset / 2 - 30}px`}
          width='60px'
          height='60px'
        />
      </a>
      <a href='https://github.com/kobtsev-m' rel='noreferrer' target='_blank'>
        <SideIcon
          src={GithubIcon}
          bottom='275px'
          left={`${containerOffset / 2 - 25}px`}
          width='50px'
          height='50px'
        />
      </a>
    </Container>
  );
};
