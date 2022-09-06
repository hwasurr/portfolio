import { css, keyframes } from '@emotion/react';
import { Box, Button, CustomLink, Heading } from '@my/components';
import { useScroll } from 'framer-motion';
import { PropsWithChildren, useEffect, useState } from 'react';
import data, { PortfolioData } from '../../data/data.ko';
import { toLowerDashedCase } from '../../utils/toLowerDashedCase';
import { PortfolioMotionVariant } from '../../utils/type-utils/motion';

interface SandboxLayoutProps extends PropsWithChildren {
  landingSection: React.ReactNode;
}
export default function SandboxLayout({
  landingSection,
  children,
}: SandboxLayoutProps): JSX.Element {
  const variants = {
    hidden: {},
    show: { transition: { duration: 0.5, staggerChildren: 0.5 } },
  };
  return (
    <Box
      id="main-section"
      sx={{
        position: 'relative',
        backgroundColor: '#1D1DC5',
        minHeight: 3800,
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
      motionProps={{ variants, initial: 'initial', animate: 'show' }}
    >
      <PageTransition />
      {/* header */}
      <SandboxLayoutHeader />
      {/* top deco bg */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          background: '#d03251',
          right: 0,
          width: '200%',
          transformOrigin: '-25% 100%',
          display: 'inline-block',
          paddingTop: '100%',
          transform: 'translate3d(0, 0, 0) rotate(-30deg)',
        }}
      />

      {landingSection}

      <Box
        sx={{
          position: 'absolute',
          top: 800,
          background: '#ffc200',
          minHeight: 1400,
          left: 0,
          width: '100%',
          transformOrigin: 'top center',
          display: 'inline-block',
          paddingTop: '100%',
          transform: 'skewY(-30deg)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: 3600,
          background: '#000',
          left: 0,
          width: '100%',
          minHeight: 800,
          transformOrigin: 'top center',
          display: 'inline-block',
          paddingTop: '60%',
          transform: 'skewY(-30deg)',
        }}
      />

      {children}
    </Box>
  );
}

const HEADER_HEIGHT = 80;
function SandboxLayoutHeader(): JSX.Element {
  const sections = (Object.keys(data) as Array<keyof PortfolioData>).map((key) =>
    toLowerDashedCase(data[key].title),
  );

  const scrollToSection = (targetsection: string): void => {
    const section = document.getElementById(targetsection);
    if (!section) return;
    section.scrollIntoView();
  };

  const [headerVisible, setHeaderVisible] = useState(true);
  const [headerBackdrop, setHeaderBackdrop] = useState(false);
  const [headerMarginTop, setHeaderMarginTop] = useState(16);
  const { scrollY } = useScroll();
  useEffect(() => {
    return scrollY.onChange((latest): void => {
      if (latest === 0) setHeaderMarginTop(16);
      else setHeaderMarginTop(0);
      if (latest > 10) setHeaderBackdrop(true);
      else setHeaderBackdrop(false);
      if (scrollY.getPrevious() > latest) {
        return setHeaderVisible(true);
      }
      if (latest > 100) {
        return setHeaderVisible(false);
      }
      return setHeaderVisible(true);
    });
  }, [scrollY]);

  const navWrapper = css({
    height: HEADER_HEIGHT,
    position: 'fixed',
    zIndex: 100,
    width: '100%',
    background: 'transparent',
    marginTop: headerMarginTop,
    backdropFilter: headerBackdrop ? 'blur(10px)' : undefined,
    boxShadow: headerBackdrop ? '0 4px 16px -8px rgba(2,12,27,0.7)' : undefined,
    transition: 'all 0.2s',
    transform: headerVisible ? undefined : `translateY(-${HEADER_HEIGHT}px)`,
  });

  const navItem = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    color: 'white',
    textTransform: 'capitalize',
  });

  const textShadowAnimation = keyframes`
  0% {background-position: 0 0}
  0% {background-position: 100% -100%}
  `;

  return (
    <Box.Flex
      as="header"
      paddingX={12}
      paddingY={4}
      justify="space-between"
      sx={{ ...navWrapper, transform: 'translateY(-60px)' }}
    >
      <Box>
        <Heading.H4
          data-shadow="Hwasurr"
          sx={{
            fontFamily: 'Calibre',
            // textShadow: '.05em .05em 0 #1D1DC5',
            ':after': {
              content: 'attr(data-shadow)',
              position: 'absolute',
              top: '0.6em',
              left: '0.6em',
              textShadow: 'none',
              backgroundImage: `linear-gradient(
                  45deg,
                  transparent 45%,
                  hsla(48,20%,90%,1) 45%,
                  hsla(48,20%,90%,1) 55%,
                  transparent 0
                  )`,
              backgroundSize: '0.05em 0.05em',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              animation: `${textShadowAnimation} 15s linear infinite`,
            },
          }}
          color="white"
          motionProps={{
            variants: {
              initial: { opacity: 0, y: -20, display: 'none' },
              show: { opacity: 1, y: 0, display: 'block' },
            },
          }}
        >
          Hwasurr
        </Heading.H4>
      </Box>
      <Box
        as="nav"
        paddingX={12}
        sx={navItem}
        motionProps={{
          variants: {
            initial: { opacity: 0, y: -20, display: 'none' },
            show: {
              opacity: 1,
              y: 0,
              display: 'flex',
              transition: { staggerChildren: 0.1 },
            },
          },
        }}
      >
        {sections.map((section) => (
          <Box
            key={section}
            motionProps={{
              variants: { initial: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } },
            }}
          >
            <CustomLink
              to={`#${section}`}
              color="primary"
              sx={{
                color: 'white',
                background: 'transparent',
                ':hover': { background: 'transparent' },
              }}
            >
              {section.split('-').join(' ')}
            </CustomLink>
          </Box>
        ))}
      </Box>
    </Box.Flex>
  );
}

function PageTransitionBase({ delay }: { delay: number }): JSX.Element {
  const variants: PortfolioMotionVariant = {
    initial: { left: '100vw' },
    show: { left: '-200vw' },
  };
  return (
    <Box
      sx={{
        background: 'transparent',
        position: 'fixed',
        top: 0,
        left: '100vw',
        zIndex: 10,
        width: '200vw',
        height: '250vh',
        overflow: 'hidden',
      }}
      motionProps={{
        variants,
        exit: { display: 'none', opacity: 0, visibility: 'hidden' },
        transition: { duration: 0.8, delay },
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          transform: 'rotate(-30deg)',
        }}
      >
        <Box sx={{ height: '30vh', backgroundColor: '#ffc200' }} />
        <Box sx={{ height: '20vh', backgroundColor: 'transparent' }} />
        <Box sx={{ height: '5vh', backgroundColor: '#e3114e' }} />
        <Box sx={{ height: '20vh', backgroundColor: 'transparent' }} />
        <Box sx={{ height: '25vh', backgroundColor: '#1D1DC5' }} />
      </Box>
    </Box>
  );
}

function PageTransition(): JSX.Element {
  return (
    <Box>
      <PageTransitionBase delay={0} />
      <PageTransitionBase delay={0.2} />
    </Box>
  );
}
