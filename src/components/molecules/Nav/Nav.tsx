import { Dispatch, FC, SetStateAction } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { BarsIcon, WorldIcon, ResumeRu, ResumeEn } from '~/assets';
import { Theme } from '~/types';
import {
  Box,
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
  const { t, i18n } = useTranslation();

  const toggleLanguage = async () => {
    await i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };

  const openResume = () => {
    const resumeUrl = i18n.language === 'en' ? ResumeEn : ResumeRu;
    window.open(resumeUrl, '_blank');
  };

  return (
    <Row>
      <Column xs={12} sm={20} xl={10} flex align='center'>
        <Wrapper>
          <NavItem>
            <ClearButton onClick={toggleLanguage}>
              <Box mr={{ xs: '0', lg: '0.2rem' }}>
                <CustomIcon src={WorldIcon} width='45px' height='45px' />
              </Box>
              <Box hideAt='lg'>{i18n.language === 'en' ? 'EN' : 'RU'}</Box>
            </ClearButton>
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
          <CustomIcon src={BarsIcon} width='50px' height='50px' />
        </ClearButton>
      </Column>
    </Row>
  );
};
