import { css } from '@emotion/react';
import { Box, Heading, List, ListItem, Text } from '@my/components';
import { Fragment } from 'react';
import { TypeAnimation } from 'react-type-animation';
import SandboxLayout from '../components/layouts/SandboxLayout';
import Section, { SectionBody } from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';
import { PortfolioMotionVariant } from '../utils/type-utils/motion';

/**
 * Portfolio
 * - [x] About me
 * - [x] Skills
 * - [x] Experiences
 * - [x] Writings
 * - [x] Contact me
 */
export default function SandboxClone(): JSX.Element {
  return (
    <SandboxLayout
      /* contents 1 - About me */
      landingSection={<LandingSection />}
    >
      {/* 섹션 1 - About me */}
      <Section id={toLowerDashedCase(data.aboutme.title)}>
        <Section.Title title={data.aboutme.title} subtitle={data.aboutme.subtitle} />
        <Section.Body
          marginY={12}
          sx={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16 }}
        >
          <Box.Flex flexDir="column" gap={2}>
            {data.aboutme.descriptions.map((desc) => (
              <Description key={desc.name} name={desc.name} value={desc.value} />
            ))}
          </Box.Flex>
          <Box>
            <Text sx={{ whiteSpace: 'break-spaces' }}>
              {data.aboutme.introduceMyself}
            </Text>
          </Box>
        </Section.Body>
      </Section>

      {/* 섹션 2 - My Skills */}
      <Section id={toLowerDashedCase(data.mySkills.title)}>
        <Section.Title title={data.mySkills.title} subtitle={data.mySkills.subtitle} />
        <Section.Body
          marginY={12}
          sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
        >
          {data.mySkills.skillSet.map((skill) => (
            <Box.Flex
              key={skill.type}
              flexDir="column"
              justify="space-between"
              padding={8}
              sx={{ backgroundColor: 'white', height: 350, color: 'rgba(0,0,0,0.85)' }}
            >
              <Heading.H6>{skill.type}</Heading.H6>
              <List>
                {skill.items.map((skillItem) => (
                  <ListItem key={skillItem}>
                    <Text>{skillItem}</Text>
                  </ListItem>
                ))}
              </List>
            </Box.Flex>
          ))}
        </Section.Body>
      </Section>

      {/* 섹션 3 - Experiences */}
      <Section id={toLowerDashedCase(data.experiences.title)}>
        <Section.Title
          title={data.experiences.title}
          subtitle={data.experiences.subtitle}
        />
        <SectionBody marginY={12}>
          {data.experiences.items.map((exp) => (
            <Fragment key={exp.title}>
              <Heading.H6>
                {exp.startedAt} ~ {exp.endedAt} {exp.title}
              </Heading.H6>
              <List>
                {exp.services.map((serv) => (
                  <ListItem key={serv.title}>
                    <Text>{serv.title}</Text>
                    <Text>{serv.description}</Text>
                  </ListItem>
                ))}
              </List>
            </Fragment>
          ))}
        </SectionBody>
      </Section>

      {/* 섹션 4 - Writings */}
      <Section id={toLowerDashedCase(data.writings.title)}>
        <Section.Title title={data.writings.title} subtitle={data.writings.subtitle} />
        <Section.Body marginY={12}>
          <List>
            {data.writings.items.map((writing) => (
              <ListItem key={writing.title}>{writing.title}</ListItem>
            ))}
          </List>
        </Section.Body>
      </Section>

      {/* 섹션 4 - Contact Me */}
      <Section id={toLowerDashedCase(data.contactMe.title)}>
        <Section.CatchPhrase emphasis text="Contact Me" />
        {data.contactMe.items.map((contact) => (
          <Section.CatchPhrase
            key={contact.title}
            text={
              <>
                {contact.icon} {contact.title}
              </>
            }
          />
        ))}
      </Section>
    </SandboxLayout>
  );
}

type CatchPhrase = (
  | string
  | {
      delay: number;
      words: string[];
    }
)[];
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

function LandingSection(): JSX.Element {
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

  const catchPhrase = [
    'i create ',
    { delay: 2000, words: ['readable', 'efficient', 'stable'] },
    ' code.',
  ];

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
            text={<EmphasisSequentialText catchPhrase={catchPhrase} />}
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

interface DescriptionProps {
  name: string;
  value: string;
}
function Description({ name, value }: DescriptionProps): JSX.Element {
  return (
    <Box.Flex gap={4} align="center">
      <Text fontWeight="bold">{name}</Text>
      <Text>{value}</Text>
    </Box.Flex>
  );
}
