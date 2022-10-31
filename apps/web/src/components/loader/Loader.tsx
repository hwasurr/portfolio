import { Box, Heading } from '@my/components';
import { theme } from '@my/style';
import { motion } from 'framer-motion';

export interface LoaderProps {
  onLoadFinish?: () => void;
}
export function Loader2({ onLoadFinish }: LoaderProps): JSX.Element {
  return (
    <Box.Flex
      key="loader"
      align="center"
      justify="center"
      height="100vh"
      width="100vw"
      sx={{ overflow: 'hidden' }}
    >
      <Heading.H1
        sx={{
          fontSize: '16rem',
          [theme.displayMediaQueries.xl]: { fontSize: '9rem' },
          [theme.displayMediaQueries.lg]: { fontSize: '7rem' },
          [theme.displayMediaQueries.sm]: { fontSize: '3.25rem' },
          [theme.displayMediaQueries.base]: { fontSize: '2.75rem' },
        }}
        motionProps={{
          animate: {
            fontFamily: "'Atma', cursive",
            textShadow: `5px 5px 0px ${theme.palette.secondary.medium}, 
          10px 10px 0px ${theme.palette.warn.medium},
          15px 15px 0px ${theme.palette.error.medium},
          20px 20px 0px ${theme.palette.success.medium},
          25px 25px 0px ${theme.palette.primary.medium},
          30px 30px 0px ${theme.palette.info.medium},
          35px 35px 0px ${theme.palette.gray.dark},
          40px 40px 0px ${theme.palette.gray.dark},
          45px 45px 0px ${theme.palette.gray.medium},
          50px 50px 0px ${theme.palette.gray.medium},
          55px 55px 0px ${theme.palette.gray.medium},
          60px 60px 0px ${theme.palette.gray.light},
          65px 65px 0px ${theme.palette.gray.light},
          70px 70px 0px ${theme.palette.gray.light},
          75px 75px 0px #EDF2F7,
          80px 80px 0px #EDF2F7, 
          85px 85px 0px #F7FAFC,
          90px 90px 0px #F7FAFC`,
            scale: [0.2, 1],
            opacity: [0, 1, 1, 1, 1, 1, 1, 1, 0],
            transition: { duration: 2, ease: 'easeOut' },
          },
          onAnimationComplete: onLoadFinish,
        }}
      >
        HWASURR
      </Heading.H1>
    </Box.Flex>
  );
}

export default function Loader({ onLoadFinish }: LoaderProps): JSX.Element {
  return (
    <Box.Flex key="loader" align="center" justify="center" height="100vh" width="100vw">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 375 374.999991"
        width="200"
        height="200"
        zoomAndPan="magnify"
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
        exit={{ scale: 0 }}
      >
        <defs>
          <clipPath id="9809dedc7c">
            <path
              d="M 64.433594 0 L 310.433594 0 L 310.433594 375 L 64.433594 375 Z M 64.433594 0 "
              clipRule="nonzero"
            />
          </clipPath>

          <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
            <stop offset="0%" stopColor="#ffc200" />
            <stop offset="30%" stopColor="#1D1DC5" />
            <stop offset="100%" stopColor="#d03251" />
          </linearGradient>
        </defs>

        <g clipPath="url(#9809dedc7c)" id="H">
          <motion.path
            key="svg-path"
            onAnimationComplete={onLoadFinish}
            style={{ stroke: 'url(#header-shape-gradient)' }}
            initial={{ pathLength: 0, fillOpacity: 0 }}
            animate={{
              pathLength: 1,
              fillOpacity: 1,
              transition: { duration: 2, ease: 'easeInOut' },
            }}
            exit={{ scale: 0 }}
            d="M 244.042969 195.3125 L 244.042969 87.890625 L 244.042969 123.046875 L 244.042969 33.203125 C 273.324219 50.78125 294.796875 85.9375 294.796875 123.046875 L 294.796875 246.09375 L 187.433594 246.09375 C 173.765625 246.09375 162.054688 244.140625 148.390625 238.28125 L 148.390625 195.3125 Z M 148.390625 257.8125 L 148.390625 371.09375 L 123.011719 355.46875 C 85.921875 333.984375 64.449219 292.96875 64.449219 250 L 64.449219 0 L 148.390625 0 L 148.390625 111.328125 L 187.433594 111.328125 C 201.097656 111.328125 214.761719 113.28125 226.472656 117.1875 L 226.472656 1.953125 L 251.851562 17.578125 C 288.941406 41.015625 310.414062 80.078125 310.414062 123.046875 L 310.414062 375 L 226.472656 375 L 226.472656 263.671875 L 187.433594 263.671875 C 173.765625 263.671875 162.054688 261.71875 148.390625 257.8125 Z M 82.019531 111.328125 L 132.773438 111.328125 L 132.773438 17.578125 L 82.019531 17.578125 Z M 226.472656 134.765625 C 214.761719 130.859375 201.097656 128.90625 187.433594 128.90625 L 82.019531 128.90625 L 82.019531 250 C 82.019531 289.0625 101.539062 322.265625 132.773438 341.796875 L 132.773438 250 L 132.773438 287.109375 L 132.773438 177.734375 C 164.007812 177.734375 195.238281 177.734375 226.472656 177.734375 Z M 244.042969 263.671875 L 244.042969 357.421875 L 294.796875 357.421875 L 294.796875 263.671875 Z M 244.042969 263.671875 "
            fill="url(#header-shape-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fillRule="evenodd"
            // stroke="transparent"
          />
        </g>
      </motion.svg>
    </Box.Flex>
  );
}
