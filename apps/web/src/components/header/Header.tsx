import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { css, useTheme } from '@emotion/react';
import { Box, Button, CustomLink } from '@my/components';
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PortfolioData } from '../../data/data.interface';
import data from '../../data/data.ko';
import useDisclosure from '../../hooks/useToggle';
import { toLowerDashedCase } from '../../utils/toLowerDashedCase';
import Logo from '../logo/Logo';

const HEADER_HEIGHT = 80;
export default function PortfolioLayoutHeader(): JSX.Element {
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
  return (
    <Box.Flex
      as="header"
      paddingX={6}
      paddingY={4}
      justify="space-between"
      sx={{ ...navWrapper, transform: 'translateY(-60px)' }}
    >
      <Box
        motionProps={{
          variants: {
            initial: { opacity: 0, y: -60, display: 'none' },
            show: { opacity: 1, y: 0, display: 'block' },
          },
        }}
      >
        <Logo />
      </Box>

      <Navigation />
    </Box.Flex>
  );
}

function Navigation(): JSX.Element {
  const theme = useTheme();
  const { onToggle, open } = useDisclosure();

  const asideVariant = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { bounce: 0 } },
  };

  return (
    <>
      <Box sx={{ [theme.displayMediaQueries.md]: { display: 'none' }, display: 'flex' }}>
        <NavigationList />
      </Box>

      <Box
        sx={{
          [theme.displayMediaQueries.md]: { display: 'flex' },
          display: 'none',
          zIndex: 11,
        }}
      >
        <Button size="lg" onClick={onToggle} sx={{ background: 'transparent' }}>
          {!open ? <AiOutlineMenu fontSize={18} /> : <AiOutlineClose fontSize={18} />}
        </Button>
      </Box>

      <Box
        as="aside"
        motionProps={{ variants: asideVariant, animate: open ? 'open' : 'closed' }}
        sx={{
          display: 'none',
          [theme.displayMediaQueries.md]: {
            display: 'flex',
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            top: '0px',
            bottom: '0px',
            right: '0px',
            padding: '50px 10px',
            width: 'min(75vw, 400px)',
            height: '100vh',
            outline: '0px',
            backgroundColor: theme.palette.primary.light,
            boxShadow: `-10px 0px 30px -15px ${theme.palette.black.medium}`,
            zIndex: 10,
            transform: 'translateX(0vw)',
            visibility: 'visible',
          },
        }}
      >
        <NavigationList />
      </Box>
    </>
  );
}

function NavigationList(): JSX.Element {
  const theme = useTheme();
  const sections = (Object.keys(data) as Array<keyof PortfolioData>).map((key) =>
    toLowerDashedCase(data[key].title),
  );
  const navItem = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    color: 'white',
    textTransform: 'capitalize',
    [theme.displayMediaQueries.md]: {
      flexDirection: 'column',
    },
  });

  const navVariants = {
    initial: { opacity: 0, y: -20, display: 'none' },
    show: {
      opacity: 1,
      y: 0,
      display: 'flex',
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <Box as="nav" paddingX={12} sx={navItem} motionProps={{ variants: navVariants }}>
      {sections.map((section) => (
        <Box
          key={section}
          motionProps={{
            variants: { initial: { opacity: 0, y: -20 }, show: { opacity: 1, y: 0 } },
          }}
        >
          <CustomLink
            to={`#${section}`}
            color="warn"
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
  );
}
