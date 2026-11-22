import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useOpenPreview } from '~/components/templates';
import { BarsIcon, ResumeRu, ResumeEn } from '~/assets';
import { isRussian } from '~/locales/i18n';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Theme } from '~/types';
import {
  ClearButton,
  Column,
  CustomButton,
  CustomIcon,
  Row,
  ThemeToggleButton
} from '~/components/atoms';
import { NavItem, Wrapper } from './Nav.styles';

interface NavProps {
  theme: Theme;
  toggleTheme: () => void;
  navCollapse: boolean;
  setNavCollapse: Dispatch<SetStateAction<boolean>>;
}

export const Nav: FC<NavProps> = (props) => {
  const { navCollapse, setNavCollapse, ...restProps } = props;
  const { t } = useTranslation();

  const openPreview = useOpenPreview();

  const openResume = () => {
    const resumeUrl = isRussian() ? ResumeRu : ResumeEn;
    // Phones render PDFs in a frame poorly, so they keep opening a new tab.
    if (window.innerWidth < 768) {
      window.open(resumeUrl, '_blank');
      return;
    }
    openPreview({ url: resumeUrl, title: t('nav.resume') });
  };

  return (
    <Row>
      <Column xs={12} sm={20} xl={10} flex align='center'>
        <Wrapper>
          <NavItem>
            <LanguageSwitcher />
          </NavItem>
          <NavItem>
            <ThemeToggleButton {...restProps} />
          </NavItem>
        </Wrapper>
      </Column>
      <Column xs={12} sm={4} xl={14} flex justify='end' hideAt='xl'>
        <Wrapper>
          <NavItem>
            <Link to='about' offset={-100}>
              {t('nav.about')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to='projects' offset={-100}>
              {t('nav.projects')}
            </Link>
          </NavItem>
          <NavItem>
            <Link to='contact' offset={-100}>
              {t('nav.contact')}
            </Link>
          </NavItem>
          <NavItem>
            <CustomButton onClick={openResume}>{t('nav.resume')}</CustomButton>
          </NavItem>
        </Wrapper>
      </Column>
      <Column xs={12} sm={4} xl={14} flex justify='end' showAt='xl'>
        <ClearButton onClick={() => setNavCollapse(!navCollapse)}>
          <CustomIcon src={BarsIcon} width='45px' height='45px' />
        </ClearButton>
      </Column>
    </Row>
  );
};
