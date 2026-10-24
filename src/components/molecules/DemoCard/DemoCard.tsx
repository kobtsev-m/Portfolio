import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CustomIcon } from '~/components/atoms';
import {
  TechnologiesListItem,
  TechnologiesList,
  CardDescription,
  CardTitle,
  IconsHeader,
  SiteIcon,
  Wrapper
} from './DemoCard.styles';
import { GithubLinkIcon } from '~/assets';
import { useSitePreview } from '~/components/templates';

interface DemoCardProps {
  projectName: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  icon?: string;
}

export const DemoCard: FC<DemoCardProps> = (props) => {
  const {
    projectName,
    description,
    technologies,
    githubLink,
    demoLink,
    icon
  } = props;
  const previewLink = useSitePreview();
  const { t } = useTranslation();
  // With a site link the whole card is the link (it opens the preview popup).
  const linkProps = demoLink
    ? {
        as: 'a' as const,
        href: demoLink,
        target: '_blank',
        rel: 'noreferrer',
        onClick: previewLink(demoLink, projectName, t('preview.ownProject'))
      }
    : {};
  return (
    <Wrapper p='0.4rem' {...linkProps}>
      <IconsHeader>
        {icon && <SiteIcon src={icon} alt='' />}
        {githubLink && !demoLink && (
          <Box position='absolute' top='0' right={icon ? '50px' : '0'}>
            <a href={githubLink} target='_blank' rel='noreferrer'>
              <CustomIcon src={GithubLinkIcon} width='44px' height='44px' />
            </a>
          </Box>
        )}
      </IconsHeader>
      <CardTitle>{projectName}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <TechnologiesList>
        {technologies.map((technology, i) => (
          <TechnologiesListItem key={i}>{technology}</TechnologiesListItem>
        ))}
      </TechnologiesList>
    </Wrapper>
  );
};
