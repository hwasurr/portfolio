import { useTheme } from '@emotion/react';
import { Box } from '@my/components';
import { AnimatePresence } from 'framer-motion';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { PortfolioMotionVariant } from '../../utils/type-utils/motion';
import PortfolioLayoutHeader from '../header/Header';
import Loader from '../loader/Loader';

interface PortfolioLayoutProps extends PropsWithChildren {
  landingSection: React.ReactNode;
}
export default function PortfolioLayout({
  landingSection,
  children,
}: PortfolioLayoutProps): JSX.Element {
  const theme = useTheme();
  const isHome = useMemo(() => window.location.pathname === '/', []);
  const [isLoading, setIsLoading] = useState(isHome);
  const handleLoadingEnd = (): void => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (isHome) return;
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  });

  const variants = {
    initial: {},
    show: { transition: { duration: 0.3, staggerChildren: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <Loader onLoadFinish={handleLoadingEnd} />
      ) : (
        <Box
          sx={{ position: 'relative' }}
          motionProps={{ variants, initial: 'initial', animate: 'show', exit: 'exit' }}
        >
          <PageTransition />

          <Box
            id="main-section"
            sx={{
              position: 'relative',
              backgroundColor: theme.palette.primary.medium,
              minHeight: 3800,
              overflowY: 'hidden',
              overflowX: 'hidden',
            }}
            motionProps={{
              variants: {
                initial: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.5 } },
              },
            }}
          >
            {/* header */}
            <PortfolioLayoutHeader />
            {/* top deco bg */}
            <Box
              sx={{
                position: 'absolute',
                background: theme.palette.secondary.medium,
                top: 0,
                right: 0,
                minHeight: 400,
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
                background: theme.palette.warn.medium,
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
                background: theme.palette.black.medium,
                left: 0,
                width: '100%',
                minHeight: 1000,
                transformOrigin: 'top center',
                display: 'inline-block',
                paddingTop: '60%',
                transform: 'skewY(-30deg)',
              }}
            />

            {children}
          </Box>
        </Box>
      )}
    </AnimatePresence>
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
        <Box sx={{ height: '20vh', backgroundColor: '#ffc200' }} />
        <Box sx={{ height: '20vh', backgroundColor: 'transparent' }} />
        <Box sx={{ height: '20vh', backgroundColor: '#e3114e' }} />
        <Box sx={{ height: '20vh', backgroundColor: 'transparent' }} />
        <Box sx={{ height: '20vh', backgroundColor: '#1D1DC5' }} />
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
