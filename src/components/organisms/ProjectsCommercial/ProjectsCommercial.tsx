import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '~/constants';
import { CommercialCard } from '~/components/molecules';
import { Row } from '~/components/atoms';

export const ProjectsCommercial: FC = () => {
  const { t } = useTranslation();
  return (
    <Row mt='0.5rem'>
      {projectsData.commercial(t).map((project, i) => (
        <Fragment key={i}>
          <CommercialCard {...project} />
        </Fragment>
      ))}
    </Row>
  );
};
