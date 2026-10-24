import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Row, Column } from '~/components/atoms';
import { useSitePreview } from '~/components/templates';
import {
  Wrapper,
  OverflowLink,
  CardEmployer,
  CardTitle,
  CardSubTitle,
  CardPeriod,
  CardDescription,
  PreviewImage,
  TechnologiesList,
  TechnologiesListItem
} from './CommercialCard.styles';

interface CommercialCardProps {
  employer?: string;
  employerLink?: string;
  companyName?: string;
  companyIcon?: string;
  position?: React.ReactNode;
  period?: string;
  description?: string;
  technologies?: string[];
  previewImg?: string;
  siteLink: string;
  githubLink: string;
  caseStudyLink?: string;
}

export const CommercialCard: FC<CommercialCardProps> = (props) => {
  const {
    employer,
    employerLink,
    companyName,
    companyIcon,
    position,
    period,
    description,
    technologies,
    previewImg,
    siteLink,
    githubLink,
    caseStudyLink
  } = props;

  const { t } = useTranslation();
  const previewLink = useSitePreview();

  // subtitle is shown next to the project name in the preview popup.
  const links = [
    {
      href: siteLink,
      label: t('projects.webSite'),
      subtitle: t('preview.officialSite')
    },
    {
      href: caseStudyLink,
      label: t('projects.caseStudy'),
      subtitle: t('preview.businesswareSite')
    },
    {
      href: githubLink,
      label: t('projects.openSourceRepository'),
      subtitle: ''
    }
  ].filter(
    (link): link is { href: string; label: string; subtitle: string } =>
      Boolean(link.href)
  );

  // Overlay buttons are stacked around the centre of the preview, 1.1rem apart.
  const linkOffset = (i: number) => {
    const offset = (i - (links.length - 1) / 2) * 1.1;
    return offset < 0 ? `- ${-offset}rem` : `+ ${offset}rem`;
  };

  return (
    <Wrapper mb='0.5rem' $interactive={links.length > 0}>
      <Row p='0.5rem'>
        <Column lg={12} pr={{ xs: '0', lg: '0.5rem' }}>
          {employer && (
            <CardEmployer href={employerLink} target='_blank' rel='noreferrer'>
              {employer} · {t('projects.clientProject')}
            </CardEmployer>
          )}
          <CardTitle icon={companyIcon}>{companyName}</CardTitle>
          <CardSubTitle>{position}</CardSubTitle>
          {period && <CardPeriod>{period}</CardPeriod>}
          <CardDescription>{description}</CardDescription>
          <Box hideAt='lg'>
            {technologies && (
              <TechnologiesList>
                {technologies?.map((technology, i) => (
                  <TechnologiesListItem key={i}>
                    {technology}
                  </TechnologiesListItem>
                ))}
              </TechnologiesList>
            )}
          </Box>
        </Column>
        <Column
          lg={12}
          position='relative'
          pl={{ xs: '0', lg: '0.5rem' }}
          pt={{ xs: '0.25rem', lg: '0' }}
        >
          <PreviewImage src={previewImg} />
          <Box position='absolute' top='0' left='0' width={105} height={100}>
            {links.map((link, i) => (
              <OverflowLink
                key={link.href}
                y={linkOffset(i)}
                href={link.href}
                onClick={previewLink(
                  link.href,
                  companyName ?? '',
                  link.subtitle
                )}
                target='_blank'
                rel='noreferrer'
              >
                {link.label}
              </OverflowLink>
            ))}
          </Box>
        </Column>
      </Row>
    </Wrapper>
  );
};
