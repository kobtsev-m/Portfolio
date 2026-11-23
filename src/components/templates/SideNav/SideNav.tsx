import { FC } from 'react';
import { Container } from '~/components/atoms';
import { useContainerOffset } from '~/hooks';
import { SIDE_NAV_MIN_OFFSET } from '~/constants';
import { useTranslation } from 'react-i18next';
import { GithubIcon, GitlabIcon, LinkedinIcon } from '~/assets';
import { LINKEDIN_URL } from '~/constants';
import { isRussian } from '~/locales/i18n';
import { SideIcon, SideLine } from './SideNav.styles';

export const SideNav: FC = () => {
  const { containerOffset, containerRef } = useContainerOffset();
  // Re-render on language change: LinkedIn is shown only outside the Russian version.
  useTranslation();
  const showLinkedin = !isRussian();

  if (containerOffset < SIDE_NAV_MIN_OFFSET) {
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
          bottom='205px'
          left={`${containerOffset / 2 - 25}px`}
          width='50px'
          height='50px'
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
      {showLinkedin && (
        <a href={LINKEDIN_URL} rel='noreferrer' target='_blank'>
          <SideIcon
            src={LinkedinIcon}
            bottom='345px'
            left={`${containerOffset / 2 - 25}px`}
            width='50px'
            height='50px'
          />
        </a>
      )}
    </Container>
  );
};
