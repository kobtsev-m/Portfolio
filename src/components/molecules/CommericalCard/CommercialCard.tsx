import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Row, Column } from '~/components/atoms';
import {
  Wrapper,
  OverflowLink,
  CardTitle,
  CardSubTitle,
  CardDescription,
  PreviewImage,
  TechnologiesList,
  TechnologiesListItem
} from './CommercialCard.styles';

interface CommercialCardProps {
  companyName?: string;
  companyIcon?: string;
  position?: string;
  description?: string;
  technologies?: string[];
  previewImg?: string;
  siteLink: string;
  githubLink: string;
}

export const CommercialCard: FC<CommercialCardProps> = (props) => {
  const {
    companyName,
    companyIcon,
    position,
    description,
    technologies,
    previewImg,
    siteLink,
    githubLink
  } = props;

  const { t } = useTranslation();

  return (
    <Wrapper mb='0.5rem'>
      <Row p='0.5rem'>
        <Column lg={12} pr={{ xs: '0', lg: '0.5rem' }}>
          <CardTitle icon={companyIcon}>{companyName}</CardTitle>
          <CardSubTitle>{position}</CardSubTitle>
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
          <Box position='absolute' top='0' left='0' width={100} height={100}>
            <OverflowLink
              y={githubLink ? '- 0.5rem' : '- 0rem'}
              href={siteLink}
              target='_blank'
              rel='noreferrer'
            >
              {t('projects.webSite')}
            </OverflowLink>
            {githubLink && (
              <OverflowLink
                y='+ 0.5rem'
                href={githubLink}
                target='_blank'
                rel='noreferrer'
              >
                GitHub
              </OverflowLink>
            )}
          </Box>
        </Column>
      </Row>
    </Wrapper>
  );
};
