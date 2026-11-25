import { FC } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { Container } from '~/components/atoms';
import { BlockHeader } from '~/components/molecules';
import { ProjectsCommercial } from '~/components/organisms';

export const Projects: FC = () => {
  const { t } = useTranslation();

  return (
    <Element name='projects'>
      <Container mt='0.5rem' mb={{ md: '0', lg: '1.5rem' }}>
        <BlockHeader title={t('nav.projects')} orient='right' />
        <ProjectsCommercial />
      </Container>
    </Element>
  );
};
