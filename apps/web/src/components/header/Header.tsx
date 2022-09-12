import { css } from '@emotion/react';
import { Box, CustomLink } from '@my/components';
import { useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { PortfolioData } from '../../data/data.interface';
import data from '../../data/data.ko';
import { toLowerDashedCase } from '../../utils/toLowerDashedCase';
import Logo from '../logo/Logo';

const HEADER_HEIGHT = 80;
export default function PortfolioLayoutHeader(): JSX.Element {
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

  return (
    <Box.Flex
      as="header"
      paddingX={12}
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
