import { css } from '@emotion/react';
import { Box, Heading, Text } from '@my/components';
import { TypeAnimation } from 'react-type-animation';
import Section from '../components/section/Section';
import { CatchPhrase } from '../data/data.interface';
import data from '../data/data.ko';
import { PortfolioMotionVariant } from '../utils/type-utils/motion';

export default function LandingSection(): JSX.Element {
  const landingSectionCss = css({
    minHeight: 800,
    width: '100%',
    paddingTop: 140,
    background: 'transparent',
  });
  const landingWrapperCss = css({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: '0 auto',
    width: 960,
    color: 'white',
    position: 'relative',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  });

  const variants: PortfolioMotionVariant = {
    initial: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };
  const imgVariants: PortfolioMotionVariant = {
    initial: { opacity: 0, x: 50, y: 50 },
    show: { opacity: 1, x: 0, y: 0 },
  };
  return (
    <Box id="landing-section" sx={landingSectionCss}>
      <Box sx={landingWrapperCss}>
        <Box sx={{ maxWidth: 450 }}>
          <Section.CatchPhrase
            emphasis
            text={
              <EmphasisSequentialText catchPhrase={data.landingSection.catchPhrase} />
            }
            motionProps={{ variants }}
          />
          <Heading.H3 motionProps={{ variants }}>웹 서비스를 만듭니다.</Heading.H3>
        </Box>

        <Box
          sx={{
            width: 480,
            height: 550,
            backgroundImage: 'url("/images/me1-recover.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          motionProps={{
            variants: imgVariants,
            transition: { duration: 0.75, stiffness: 0, bounce: 0, damping: 0 },
          }}
        />
      </Box>
    </Box>
  );
}

interface EmphasisSequentialTextProps {
  catchPhrase: CatchPhrase;
}
function EmphasisSequentialText({
  catchPhrase,
}: EmphasisSequentialTextProps): JSX.Element {
  return (
    <Text lineHeight="inherit">
      {catchPhrase.map((c) => {
        if (typeof c === 'string') return c;
        const sequence = c.words.reduce<Array<string | number>>(
          (acc, curr) => acc.concat([curr, c.delay]),
          [],
        );
        return (
          <TypeAnimation
            key="sequential-text"
            sequence={sequence}
            cursor
            repeat={Infinity}
          />
        );
      })}
    </Text>
  );
}
