import { FC, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '~/constants';
import { CommercialCard } from '~/components/molecules';
import { Row } from '~/components/atoms';
import {
  EmployerWrapper,
  EmployerTitle,
  EmployerSubTitle,
  EmployerPeriod,
  EmployerText,
  EmployerLink
} from './ProjectsCommercial.styles';

export const ProjectsCommercial: FC = () => {
  const { t } = useTranslation();
  const employer = projectsData.employer(t);
  return (
    <Row mt='0.5rem'>
      <EmployerWrapper p='0.5rem' mb='0.5rem'>
        <EmployerTitle href={employer.link} target='_blank' rel='noreferrer'>
          {employer.name}
        </EmployerTitle>
        <EmployerSubTitle>{employer.position}</EmployerSubTitle>
        <EmployerPeriod>{employer.period}</EmployerPeriod>
        <EmployerText>{employer.description}</EmployerText>
        <EmployerText>{employer.other}</EmployerText>
        <EmployerLink href={employer.link} target='_blank' rel='noreferrer'>
          <svg
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            aria-hidden='true'
          >
            <path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' />
            <path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' />
          </svg>
          businesswaretech.com
        </EmployerLink>
      </EmployerWrapper>
      {projectsData.commercial(t).map((project, i) => (
        <Fragment key={i}>
          <CommercialCard {...project} />
        </Fragment>
      ))}
    </Row>
  );
};
