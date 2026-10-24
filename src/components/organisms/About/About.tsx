import { FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import { Transition, animated, config } from 'react-spring';
import { aboutData, SIDE_NAV_MIN_OFFSET } from '~/constants';
import { useContainerOffset } from '~/hooks';
import { GithubIcon, GitlabIcon } from '~/assets';
import { Box, Container, Row, Column, CustomButton } from '~/components/atoms';
import { BlockHeader } from '~/components/molecules';
import {
  AboutText,
  ProfileLinks,
  TechnologiesBlock,
  TechnologiesList,
  TechnologiesListItem
} from './About.styles';

const AnimatedTechnologiesListItem = animated(TechnologiesListItem);

const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/kobtsev-m', icon: GithubIcon },
  { label: 'GitLab', href: 'https://gitlab.com/kobtsev-m', icon: GitlabIcon }
];

export const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  const { containerOffset, containerRef } = useContainerOffset();
  // On wide screens the side rail already shows these links.
  const showProfileLinks = containerOffset < SIDE_NAV_MIN_OFFSET;
  return (
    <Element name='about'>
      <Container ref={containerRef} mt='0.5rem' mb={{ md: '0', lg: '1.5rem' }}>
        <BlockHeader title={t('nav.about')} orient='left' />
        <Row mt={{ xs: '0.2rem', lg: '0.5rem' }}>
          <Column lg={16}>
            <AboutText>
              <Trans i18nKey='about.text' components={[<b />, <br />]} />
            </AboutText>
            {showProfileLinks && (
              <ProfileLinks>
                {profileLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target='_blank'
                    rel='noreferrer'
                    aria-label={link.label}
                    title={link.label}
                  >
                    <img src={link.icon} alt={link.label} />
                  </a>
                ))}
              </ProfileLinks>
            )}
          </Column>
          <Column lg={8} mt={{ xs: '0.5rem', lg: '0' }}>
            <VisibilitySensor
              partialVisibility={true}
              minTopValue={200}
              onChange={(v) => (v ? setIsVisible(true) : {})}
            >
              <TechnologiesBlock>
                <CustomButton width={100} disabled={true}>
                  {t('about.technologies')}
                </CustomButton>
                <Box mt='0.3rem'>
                  <TechnologiesList>
                    {aboutData.technologies.map((technology, i) => (
                      <Transition
                        key={i}
                        items={isVisible}
                        delay={i * 150}
                        from={{
                          opacity: 0,
                          transform: 'translateY(50px)'
                        }}
                        enter={{
                          opacity: technology.importance,
                          transform: 'translateY(0)',
                          config: config.gentle
                        }}
                        leave={{
                          opacity: 0,
                          transform: 'translateY(50px)',
                          config: { duration: 0 }
                        }}
                      >
                        {(styles, item) =>
                          item && (
                            <AnimatedTechnologiesListItem style={styles}>
                              {technology.name}
                            </AnimatedTechnologiesListItem>
                          )
                        }
                      </Transition>
                    ))}
                  </TechnologiesList>
                </Box>
              </TechnologiesBlock>
            </VisibilitySensor>
          </Column>
        </Row>
      </Container>
    </Element>
  );
};
