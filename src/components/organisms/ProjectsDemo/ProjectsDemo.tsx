import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '~/constants';
import { Row, Column, CustomButton } from '~/components/atoms';
import { DemoCard } from '~/components/molecules';
import { DemoTitle } from './ProjectsDemo.styles';

export const ProjectsDemo: FC = () => {
  const { t } = useTranslation();
  const [isEnrolled, setIsEnrolled] = useState(false);

  const toggleEnrolled = () => {
    setIsEnrolled(!isEnrolled);
  };

  const projectToShow = isEnrolled
    ? projectsData.demo(t)
    : projectsData.demo(t).slice(0, 6);

  return (
    <>
      <Row mt='0.5rem' align='center'>
        <Column xs={3} sm={4} lg={8}>
          <hr />
        </Column>
        <Column xs={18} sm={16} lg={8} flex justify='center'>
          <DemoTitle>{t('projects.otherProjects')}</DemoTitle>
        </Column>
        <Column xs={3} sm={4} lg={8}>
          <hr />
        </Column>
      </Row>
      <Row justify='center' mt='1rem'>
        {projectToShow.map((card, i) => (
          <Column key={i} md={12} xl={8} gutter='0.3rem' mb='0.3rem'>
            <DemoCard {...card} />
          </Column>
        ))}
      </Row>
      <Row justify='center'>
        <Column md={12} xl={8} gutter='0.3rem'>
          <CustomButton width={100} color='accent' onClick={toggleEnrolled}>
            {isEnrolled ? t('projects.hide') : t('projects.showMore')}
          </CustomButton>
        </Column>
      </Row>
    </>
  );
};
