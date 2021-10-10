import { TFunction } from 'react-i18next';
import {
  AmdbIcon,
  AmdbPreviewImg,
  IntegralIcon,
  IntegralPreviewImg
} from '~/assets';

export const projectsData = {
  commercial: (t: TFunction) => [
    {
      companyName: t('projects.ic.companyName'),
      companyIcon: IntegralIcon,
      position: t('projects.ic.position'),
      description: t('projects.ic.description'),
      technologies: ['Next.js', 'Redux', 'Google Maps API', 'Bootstrap'],
      previewImg: IntegralPreviewImg,
      siteLink: 'https://integral-commodities.ch/',
      githubLink: 'https://github.com/kobtsev-m/Integral-Commodities/'
    },
    {
      companyName: t('projects.amdb.companyName'),
      companyIcon: AmdbIcon,
      position: t('projects.amdb.position'),
      description: t('projects.amdb.description'),
      technologies: ['Django', 'Bootstrap', 'JavaScript', 'Plotly.js'],
      previewImg: AmdbPreviewImg,
      siteLink: 'https://amdb.online/',
      githubLink: ''
    }
  ],
  demo: (t: TFunction) => [
    {
      projectName: 'Portfolio',
      description: t('projects.portfolio.description'),
      technologies: [
        'React',
        'Typescript',
        'React-Spring',
        'Styled compoents'
      ],
      githubLink: 'https://github.com/kobtsev-m/Portfolio/',
      demoLink: ''
    },
    {
      projectName: 'City Bikes',
      description: t('projects.cityBikes.description'),
      technologies: ['React Native', 'Redux', 'Stripe', 'Google Maps API'],
      githubLink: 'https://github.com/kobtsev-m/City-Bikes-App/',
      demoLink: 'https://expo.dev/@kobtsev-m/citybikes'
    },
    {
      projectName: 'Cocktails menu',
      description: t('projects.cocktailsMenu.description'),
      technologies: ['React', 'Styled components', ''],
      githubLink: 'https://github.com/kobtsev-m/Ciky-Bikes-App/',
      demoLink: 'https://kobtsev-m.github.io/Cocktails-Menu/'
    },
    {
      projectName: 'Blog site',
      description: t('projects.blogSite.description'),
      technologies: ['React', 'Django', 'Bootstrap'],
      githubLink: 'https://github.com/kobtsev-m/Rest-Api-Blog/',
      demoLink: 'https://kobtsev-m.github.io/Rest-Api-Blog'
    },
    {
      projectName: 'Polygonal animations',
      description: t('projects.polygonalAnimations.description'),
      technologies: ['Anime.js', 'Django'],
      githubLink: 'https://github.com/kobtsev-m/Polygonal-Svg',
      demoLink: 'https://pure-oasis-09000.herokuapp.com/'
    },
    {
      projectName: 'Animal Shelter',
      description: t('projects.animalShelter.description'),
      technologies: ['Django', 'AWS', 'Bootstrap'],
      githubLink: 'https://github.com/kobtsev-m/Animal-Shelter',
      demoLink: 'https://frozen-springs-02490.herokuapp.com/'
    },
    {
      projectName: 'Django OAuth',
      description: t('projects.djangoOAuth.description'),
      technologies: ['Django', 'AllAuth'],
      githubLink: 'https://github.com/kobtsev-m/Django-Auth',
      demoLink: 'https://warm-beyond-18141.herokuapp.com/accounts/login/'
    },
    {
      projectName: 'Car Searcher',
      description: t('projects.carSearcher.description'),
      technologies: ['React', 'Django', 'Bootstrap'],
      githubLink: 'https://github.com/relax-man/Car-Searcher',
      demoLink: 'https://relax-man.github.io/Car-Searcher'
    },
    {
      projectName: 'Waxom',
      description: t('projects.waxom.description'),
      technologies: ['Sass', 'Bootstrap'],
      githubLink: 'https://github.com/kobtsev-m/Waxom',
      demoLink: 'https://kobtsev-m.github.io/Waxom'
    }
  ]
};
