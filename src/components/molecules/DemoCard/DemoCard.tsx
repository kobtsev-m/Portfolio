import { FC } from 'react';
import { Box, CustomIcon } from '~/components/atoms';
import {
  TechnologiesListItem,
  TechnologiesList,
  CardDescription,
  CardTitle,
  IconsHeader,
  Wrapper
} from './DemoCard.styles';
import { GithubLinkIcon, WebsiteLinkIcon } from '~/assets';

interface DemoCardProps {
  projectName: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
}

export const DemoCard: FC<DemoCardProps> = (props) => {
  const { projectName, description, technologies, githubLink, demoLink } =
    props;
  return (
    <Wrapper p='0.4rem'>
      <IconsHeader>
        <Box position='absolute' top='0' right={demoLink ? '50px' : '0'}>
          <a href={githubLink} target='_blank' rel='noreferrer'>
            <CustomIcon src={GithubLinkIcon} width='44px' height='44px' />
          </a>
        </Box>
        {demoLink && (
          <Box position='absolute' top='0' right='0'>
            <a href={demoLink} target='_blank' rel='noreferrer'>
              <CustomIcon src={WebsiteLinkIcon} width='40px' height='40px' />
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
