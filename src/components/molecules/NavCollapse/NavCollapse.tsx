import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { animated, config, useSpring } from 'react-spring';
import { ResumeRu, ResumeEn } from '~/assets';
import { Box, CustomButton } from '~/components/atoms';
import { Wrapper, NavItem } from './NavCollapse.styles';

interface NavCollapseProps {
  navCollapse: boolean;
  setNavCollapse: Dispatch<SetStateAction<boolean>>;
}

const AnimatedWrapper = animated(Wrapper);

export const NavCollapse: FC<NavCollapseProps> = (props) => {
  const { navCollapse, setNavCollapse } = props;
  const { i18n, t } = useTranslation();

  const effect = useSpring({
    transform: navCollapse ? 'translateY(0vh)' : 'translateY(100vh)',
    config: config.slow
  });

  const openResume = () => {
    const resumeUrl = i18n.language === 'en' ? ResumeEn : ResumeRu;
    window.open(resumeUrl, '_blank');
  };

  return (
    <Box showAt='xl'>
      <AnimatedWrapper style={effect}>
        <NavItem>
          <Link
            to='about'
            offset={-100}
            smooth={true}
            onClick={() => setNavCollapse(false)}
          >
            {t('nav.about')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to='projects'
            offset={-100}
            smooth={true}
            onClick={() => setNavCollapse(false)}
          >
            {t('nav.projects')}
          </Link>
        </NavItem>
        <NavItem>
          <Link
            to='contact'
            offset={-100}
            smooth={true}
            onClick={() => setNavCollapse(false)}
          >
            {t('nav.contact')}
          </Link>
        </NavItem>
        <NavItem>
          <CustomButton onClick={openResume}>{t('nav.resume')}</CustomButton>
        </NavItem>
      </AnimatedWrapper>
    </Box>
  );
};
