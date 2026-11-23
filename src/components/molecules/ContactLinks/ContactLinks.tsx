import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CustomIcon } from '~/components/atoms';
import { Wrapper, DescriptionText } from './ContactLinks.styles';
import { MailLinkIcon, TelegramLinkIcon, WhatsappLinkIcon } from '~/assets';

export const ContactLinks: FC = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <DescriptionText>{t('contact.additionalText')}</DescriptionText>
      <Box position='relative'>
        <a
          href='mailto:kobtsev.info@gmail.com'
          rel='noreferrer'
          target='_blank'
        >
          <Box position='absolute' top='0.8rem' left='0.2rem'>
            <CustomIcon src={MailLinkIcon} width='1rem' height='1rem' />
          </Box>
        </a>
        <a href='https://wa.me/kobtsev_m' rel='noreferrer' target='_blank'>
          <Box position='absolute' top='0.6rem' right='0.45rem'>
            <CustomIcon
              src={WhatsappLinkIcon}
              width='0.8rem'
              height='0.8rem'
            />
          </Box>
        </a>
        <a href='https://t.me/kobtsev_m' rel='noreferrer' target='_blank'>
          <Box position='absolute' top='2rem' left='35%'>
            <CustomIcon
              src={TelegramLinkIcon}
              width='1.2rem'
              height='1.2rem'
            />
          </Box>
        </a>
      </Box>
    </Wrapper>
  );
};
