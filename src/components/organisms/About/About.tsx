import { FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import { Transition, animated, config } from 'react-spring';
import { aboutData } from '~/constants';
import { Box, Container, Row, Column, CustomButton } from '~/components/atoms';
import { BlockHeader } from '~/components/molecules';
import {
  AboutText,
  TechnologiesBlock,
  TechnologiesList,
  TechnologiesListItem
} from './About.styles';

const AnimatedTechnologiesListItem = animated(TechnologiesListItem);

export const About: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();
  return (
    <Element name='about'>
      <Container mt='0.5rem'>
        <BlockHeader title={t('nav.about')} orient='left' />
        <Row mt={{ xs: '0.2rem', lg: '0.5rem' }}>
          <Column lg={16}>
            <AboutText>
              <Trans i18nKey='about.text' components={[<b />, <br />]} />
            </AboutText>
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
