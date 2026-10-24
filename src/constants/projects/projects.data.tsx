import { TFunction, Trans } from 'react-i18next';
import {
  AidIcon,
  AidPreviewImg,
  AmdbIcon,
  AmdbPreviewImg,
  BfIcon,
  BfPreviewImg,
  FsIcon,
  FsPreviewImg,
  IntegralIcon,
  IntegralPreviewImg,
  InqiIcon,
  InqiPreviewImg,
  NewsIcon,
  HobbioIcon,
  ReelabsIcon,
  NewsPreviewImg,
  DestiniIcon,
  WoPreviewImg
} from '~/assets';

const employer = {
  employer: 'Businessware',
  employerLink: 'https://www.businesswaretech.com'
};

export const projectsData = {
  employer: (t: TFunction) => ({
    name: 'Businessware Technologies',
    link: employer.employerLink,
    position: t('projects.bw.position'),
    period: `03/2021 — ${t('projects.present')}`,
    description: t('projects.bw.description'),
    other: t('projects.bw.other')
  }),
  commercial: (t: TFunction) => [
    {
      ...employer,
      companyName: t('projects.inqi.companyName'),
      companyIcon: InqiIcon,
      position: (
        <Trans i18nKey='projects.inqi.position' components={[<br />]} />
      ),
      period: `06/2025 — ${t('projects.present')}`,
      description: t('projects.inqi.description'),
      technologies: [
        'Python',
        'Django',
        'React',
        'TypeScript',
        'React Native',
        'OpenAI Agents SDK',
        'MCP',
        'Stripe',
        'AWS',
        'Terraform'
      ],
      previewImg: InqiPreviewImg,
      siteLink: 'https://inqi.ai',
      githubLink: ''
    },
    {
      ...employer,
      companyName: t('projects.bf.companyName'),
      companyIcon: BfIcon,
      position: <Trans i18nKey='projects.bf.position' components={[<br />]} />,
      period: '02/2023 — 06/2025',
      description: t('projects.bf.description'),
      technologies: [
        'React',
        'Python',
        'GraphQL',
        'DynamoDB',
        'Docker',
        'AWS'
      ],
      previewImg: BfPreviewImg,
      siteLink: 'https://bushfire.ai',
      githubLink: '',
      caseStudyLink:
        'https://www.businesswaretech.com/case-studies/ai-for-forest-fire-detection'
    },
    {
      ...employer,
      companyName: t('projects.wo.companyName'),
      companyIcon: DestiniIcon,
      position: <Trans i18nKey='projects.wo.position' components={[<br />]} />,
      period: '06/2022 — 06/2025',
      description: t('projects.wo.description'),
      technologies: [
        'Angular',
        'PDFTron',
        'OpenCV',
        'ONNX Runtime',
        'Azure DevOps'
      ],
      previewImg: WoPreviewImg,
      siteLink: 'https://destinitakeoff.com',
      githubLink: ''
    },
    {
      ...employer,
      companyName: t('projects.news.companyName'),
      companyIcon: NewsIcon,
      position: (
        <Trans i18nKey='projects.news.position' components={[<br />]} />
      ),
      period: '12/2025 — 03/2026',
      description: t('projects.news.description'),
      technologies: [
        'Python',
        'FastAPI',
        'YOLO',
        'Gemini',
        'PyMuPDF',
        'GCP',
        'S3',
        'Docker'
      ],
      previewImg: NewsPreviewImg,
      siteLink: '',
      githubLink: '',
      caseStudyLink:
        'https://www.businesswaretech.com/case-studies/ai-driven-ad-digitization-in-pdf-newspapers'
    },
    {
      ...employer,
      companyName: t('projects.fs.companyName'),
      companyIcon: FsIcon,
      position: <Trans i18nKey='projects.fs.position' components={[<br />]} />,
      period: '03/2021 — 02/2023',
      description: t('projects.fs.description'),
      technologies: ['React', 'Express', 'PostgreSQL', 'AWS'],
      previewImg: FsPreviewImg,
      siteLink: 'https://firststep.ai',
      githubLink: '',
      caseStudyLink:
        'https://www.businesswaretech.com/case-studies/machine-learning-model-training-system'
    },
    {
      ...employer,
      companyName: t('projects.aid.companyName'),
      companyIcon: AidIcon,
      position: (
        <Trans i18nKey='projects.aid.position' components={[<br />]} />
      ),
      period: '06/2021 — 05/2022',
      description: t('projects.aid.description'),
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'React', 'AWS'],
      previewImg: AidPreviewImg,
      siteLink: '',
      githubLink: '',
      caseStudyLink:
        'https://www.businesswaretech.com/case-studies/ai-for-tuberculosis-diagnostics'
    },
    {
      companyName: t('projects.ic.companyName'),
      companyIcon: IntegralIcon,
      position: <Trans i18nKey='projects.ic.position' components={[<br />]} />,
      period: '06/2020 — 02/2021',
      description: t('projects.ic.description'),
      technologies: ['Next', 'Google Maps', 'Docker', 'Nginx'],
      previewImg: IntegralPreviewImg,
      siteLink: '',
      githubLink: ''
    },
    {
      companyName: t('projects.amdb.companyName'),
      companyIcon: AmdbIcon,
      position: (
        <Trans i18nKey='projects.amdb.position' components={[<br />]} />
      ),
      period: '09/2019 — 05/2020',
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
      projectName: 'Hobbio',
      icon: HobbioIcon,
      description: t('projects.hobbio.description'),
      technologies: ['Expo', 'NestJS', 'PostgreSQL', 'Redis', 'Kubernetes'],
      demoLink: 'https://hobbio.ru',
      githubLink: ''
    },
    {
      projectName: 'Reelabs',
      icon: ReelabsIcon,
      description: t('projects.reelabs.description'),
      technologies: ['NestJS', 'BullMQ', 'OpenAI', 'Remotion', 'AWS Lambda'],
      demoLink: 'https://reelabs.ru',
      githubLink: ''
    }
  ]
};
