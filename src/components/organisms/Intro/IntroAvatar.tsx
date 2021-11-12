import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { animated, config, useSpring, useSprings } from 'react-spring';
import { darkTheme } from '~/styles';
import { hexToRgb } from '~/utils';
import { AvatarJpgImg, AvatarJson as avatar } from '~/assets';
import { Box, BorderButton } from '~/components/atoms';
import { AvatarSvg, AvatarJpg } from './Intro.styles';

enum AnimationStatus {
  Animation2,
  Stopped
}

const AnimatedAvatarJpg = animated(AvatarJpg);

export const IntroAvatar = memo(() => {
  const [status, setStatus] = useState<AnimationStatus>(
    AnimationStatus.Stopped
  );
  const { t } = useTranslation();

  // const effects1 = useSprings(
  //   avatar.length,
  //   avatar.map((_, i) => ({
  //     from: { transform: 'translateX(-800px)' },
  //     to: { transform: 'translateX(0)' },
  //     delay: 600 + i * 4,
  //     config: config.gentle,
  //     onRest: () => {
  //       if (i === avatar.length - 1) {
  //         setStatus(AnimationStatus.Stopped);
  //       }
  //     }
  //   }))
  // );

  const effects2 = useSprings(
    avatar.length,
    avatar.map((_, i) => ({
      to:
        status === AnimationStatus.Animation2
          ? async (next: any) => {
              await next({ fill: hexToRgb(darkTheme.color.font) });
              await next({ fill: avatar[i].fill });
            }
          : { fill: avatar[i].fill },
      delay: 300 + i * 4,
      config: { ...config.gentle, duration: 1500 },
      onRest: () => {
        if (i === avatar.length - 1) {
          setTimeout(() => setStatus(AnimationStatus.Stopped), 1500);
        }
      }
    }))
  );

  const effects3 = useSpring({
    opacity: status === AnimationStatus.Stopped ? 1 : 0,
    config: { ...config.molasses, duration: 1000 }
  });

  const handleAnimateClick = () => {
    setStatus(AnimationStatus.Animation2);
  };

  return (
    <Box position='relative'>
      <AvatarSvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 718 960'>
        <rect
          x='0'
          y='0'
          width='718'
          height='960'
          fill={darkTheme.color.background}
        />
        {effects2.map(
          (effect, i) => (
            <animated.path key={i} style={effect} {...avatar[i]} />
          )
        )}
      </AvatarSvg>
      <Box position='absolute' top='0' left='0' width={100}>
        <AnimatedAvatarJpg src={AvatarJpgImg} style={effects3} />
      </Box>
      <Box mt='0.5em'>
        <BorderButton
          onClick={handleAnimateClick}
          isLoading={status !== AnimationStatus.Stopped}
        >
          {t('intro.animate')}
        </BorderButton>
      </Box>
    </Box>
  );
});
