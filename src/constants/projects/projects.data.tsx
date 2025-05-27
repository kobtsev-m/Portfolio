import { TFunction, Trans } from 'react-i18next';
import {
  AmdbIcon,
  AmdbPreviewImg,
  BfIcon,
  BfPreviewImg,
  FsIcon,
  FsPreviewImg,
  IntegralIcon,
  IntegralPreviewImg,
  WoIcon,
  WoPreviewImg
} from '~/assets';

export const projectsData = {
  commercial: (t: TFunction) => [
    {
      companyName: t('projects.bf.companyName'),
      companyIcon: BfIcon,
      position: <Trans i18nKey='projects.bf.position' components={[<br />]} />,
      description: t('projects.bf.description'),
      technologies: [
        'React',
        'Python',
        'Hikivision',
        'GraphQL',
        'DynamoDB',
        'Docker',
        'AWS'
      ],
      previewImg: BfPreviewImg,
      siteLink: 'https://bushfire.ai',
      githubLink: ''
    },
    {
      companyName: t('projects.wo.companyName'),
      companyIcon: WoIcon,
      position: <Trans i18nKey='projects.wo.position' components={[<br />]} />,
      description: t('projects.wo.description'),
      technologies: [
        'Angular',
        'PDFTron',
        'OpenCV',
        'ONNX Runtime',
        'Azure DevOps'
      ],
      previewImg: WoPreviewImg,
      siteLink: 'https://workpack.ai',
      githubLink: ''
    },
    {
      companyName: t('projects.fs.companyName'),
      companyIcon: FsIcon,
      position: <Trans i18nKey='projects.fs.position' components={[<br />]} />,
      description: t('projects.fs.description'),
      technologies: ['React', 'Express', 'PostgreSQL', 'AWS'],
      previewImg: FsPreviewImg,
      siteLink: 'https://firststep.ai',
      githubLink: ''
    },
    {
      companyName: t('projects.ic.companyName'),
      companyIcon: IntegralIcon,
      position: <Trans i18nKey='projects.ic.position' components={[<br />]} />,
      description: t('projects.ic.description'),
      technologies: ['Next', 'Google Maps', 'Docker', 'Nginx'],
      previewImg: IntegralPreviewImg,
      siteLink: '',
      githubLink: 'https://github.com/kobtsev-m/Integral-Commodities/'
    },
    {
      companyName: t('projects.amdb.companyName'),
      companyIcon: AmdbIcon,
      position: (
        <Trans i18nKey='projects.amdb.position' components={[<br />]} />
      ),
      description: t('projects.amdb.description'),
      technologies: [
        'Django',
        'JavaScript',
        'Plotly',
        'SQLite',
        'Docker',
        'Nginx'
      ],
      previewImg: AmdbPreviewImg,
      siteLink: 'https://amdb.online',
      githubLink: ''
    }
  ],
  demo: (t: TFunction) => [
    {
      projectName: 'Portfolio',
      description: t('projects.portfolio.description'),
      technologies: ['React', 'Spring Animations'],
      demoLink: '',
      githubLink: 'https://github.com/kobtsev-m/Portfolio/'
    },
    {
      projectName: 'Hobbio',
      description: t('projects.hobbio.description'),
      technologies: ['Expo', 'Nest', 'PostgreSQL', 'Docker'],
      demoLink: 'https://hobbio.ru',
      githubLink: ''
    }
  ]
};
