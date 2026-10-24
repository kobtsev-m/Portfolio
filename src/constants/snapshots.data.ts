import {
  AmdbSnapshot,
  BwAidSnapshot,
  BwBushfireSnapshot,
  BwFirststepSnapshot,
  BwNewsSnapshot
} from '~/assets';

// These sites refuse to be embedded in an iframe (X-Frame-Options), so their pages are shown as full-page snapshots.
const caseStudy = (slug: string) =>
  `https://www.businesswaretech.com/case-studies/${slug}`;

export const pageSnapshots: Record<string, string> = {
  [caseStudy('ai-for-forest-fire-detection')]: BwBushfireSnapshot,
  [caseStudy('machine-learning-model-training-system')]: BwFirststepSnapshot,
  [caseStudy('ai-for-tuberculosis-diagnostics')]: BwAidSnapshot,
  [caseStudy('ai-driven-ad-digitization-in-pdf-newspapers')]: BwNewsSnapshot,
  'https://amdb.online': AmdbSnapshot
};
