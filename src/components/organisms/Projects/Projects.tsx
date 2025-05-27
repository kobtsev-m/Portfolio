import { FC } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  animated,
  config,
  useTransition,
  UseTransitionProps
} from 'react-spring';
import { useContainerOffset, useScrollTrigger } from '~/hooks';
import { Box, Container } from '~/components/atoms';
import { BlockHeader } from '~/components/molecules';
import { ProjectsCommercial, ProjectsDemo } from '~/components/organisms';
import { InscriptionText } from './Projects.styles';

const AnimatedBox = animated(Box);

export const Projects: FC = () => {
  const { containerOffset, containerRef } = useContainerOffset();
  const { ref: commercialRef, isUnder: isCommercial } = useScrollTrigger();
  const { ref: demoRef, isUnder: isDemo } = useScrollTrigger();
  const { t } = useTranslation();

  const isLargeDesktop = containerOffset >= 140;

  const getInscriptionAnimation = (
    trigger: boolean
  ): [boolean, UseTransitionProps] => {
    return [
      trigger,
      {
        from: {
          transform: `translateX(${containerOffset / 4}px)`,
          opacity: 0
        },
        enter: { transform: 'translateX(0px)', opacity: 1 },
        leave: {
          transform: `translateX(${containerOffset / 4}px)`,
          opacity: 0
        },
        reverse: trigger,
        config: config.slow
      }
    ];
  };

  const commercialAnimation = useTransition(
    ...getInscriptionAnimation(isCommercial)
  );
  const demoAnimation = useTransition(...getInscriptionAnimation(isDemo));

  const getInscription = (styles: any, title: string) => (
    <AnimatedBox
      position='fixed'
      top='50%'
      right={`${containerOffset / 2}px`}
      style={styles}
    >
      <InscriptionText>{title}</InscriptionText>
    </AnimatedBox>
  );

  return (
    <Element name='projects'>
      <Container ref={containerRef} mt='0.5rem' mb={{ md: '0', lg: '1.5rem' }}>
        <BlockHeader title={t('nav.projects')} orient='right' />
        <div ref={commercialRef}>
          <ProjectsCommercial />
        </div>
        <div ref={demoRef}>
          <ProjectsDemo />
        </div>
      </Container>
      {isLargeDesktop && (
        <>
          {commercialAnimation(
            (styles, item) =>
              item && getInscription(styles, t('projects.commercial'))
          )}
          {demoAnimation(
            (styles, item) =>
              item && getInscription(styles, t('projects.demo'))
          )}
        </>
      )}
    </Element>
  );
};
