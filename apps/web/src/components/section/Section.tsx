import { Box, Heading } from '@my/components';
import { BoxProps } from '@my/components/src/layouts/Box/Box';
import { H1, HeadingProps } from '@my/components/src/layouts/Heading/Heading';
import { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id?: string;
}
export function Section({ id, children }: SectionProps): JSX.Element {
  return (
    <Box
      id={id}
      as="section"
      marginY={24}
      marginX="auto"
      paddingX={4}
      sx={{
        width: 960,
        minHeight: 600,
        color: 'white',
        position: 'relative',
        background: 'transparent',
      }}
    >
      {children}
    </Box>
  );
}

interface SectionCatchPhraseProps extends Pick<HeadingProps, 'motionProps'> {
  text: React.ReactNode;
  emphasis?: boolean;
}
export function SectionCatchPhrase({
  text,
  emphasis,
  motionProps,
}: SectionCatchPhraseProps): JSX.Element {
  return (
    <H1
      sx={{
        maxWidth: 600,
        textTransform: 'uppercase',
        color: emphasis ? '#E3114E' : 'inherit',
        fontWeight: 900,
        fontSize: emphasis ? '5rem' : undefined,
        lineHeight: emphasis ? 1 : 1.2,
      }}
      motionProps={motionProps}
    >
      {text}
    </H1>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle: string;
}
export function SectionTitle({ title, subtitle }: SectionTitleProps): JSX.Element {
  return (
    <>
      <Box.Flex justify="center" align="center" gap={8}>
        <Box
          sx={{
            flexShrink: 0,
            transition:
              'transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
          }}
          motionProps={{
            initial: { opacity: 0, x: -25 },
            whileInView: { opacity: 1, x: 0 },
          }}
        >
          <H1
            sx={{
              maxWidth: 400,
              textTransform: 'uppercase',
              fontWeight: '900',
              lineHeight: 1.2,
            }}
          >
            {title}
          </H1>
        </Box>
        <Box
          sx={{ height: 10, backgroundColor: 'white', width: '100%' }}
          motionProps={{
            transition: { delay: 0.3, duration: 0.4 },
            initial: { opacity: 0, x: 200 },
            whileInView: { opacity: 1, x: 0 },
          }}
        />
      </Box.Flex>
      <Heading.H6>{subtitle}</Heading.H6>
    </>
  );
}

type SectionBodyProps = BoxProps;
export function SectionBody(props: SectionBodyProps): JSX.Element {
  return <Box {...props} />;
}

Section.Title = SectionTitle;
Section.CatchPhrase = SectionCatchPhrase;
Section.Body = SectionBody;
export default Section;
