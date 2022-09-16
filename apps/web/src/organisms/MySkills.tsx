import { useTheme } from '@emotion/react';
import { Box, Heading, List, ListItem, Text } from '@my/components';
import Section from '../components/section/Section';
import { SkillSet } from '../data/data.interface';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

// 섹션 2 - MySkills
export default function MySkills(): JSX.Element {
  const theme = useTheme();
  return (
    <Section id={toLowerDashedCase(data.mySkills.title)}>
      <Section.Title title={data.mySkills.title} subtitle={data.mySkills.subtitle} />
      <Section.Body
        enableAnimation={false}
        marginY={12}
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          [theme.displayMediaQueries.base]: {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {data.mySkills.skillSet.map((skill) => (
          <SkillItem key={skill.type} {...skill} />
        ))}
      </Section.Body>
    </Section>
  );
}

function SkillItem(skill: SkillSet): JSX.Element {
  const theme = useTheme();
  const variants = {
    whileInView: { y: 0, opacity: 1 },
    initial: { y: 30, opacity: 0 },
  };
  return (
    <Box.Flex
      key={skill.type}
      flexDir="column"
      justify="space-between"
      padding={8}
      sx={{
        backgroundColor: 'white',
        height: 350,
        color: 'rgba(0,0,0,0.85)',
        [theme.displayMediaQueries.base]: {
          height: '100%',
        },
      }}
      motionProps={{
        variants,
        whileInView: 'whileInView',
        initial: 'initial',
        viewport: { once: true, amount: 0.5 },
      }}
    >
      <Heading.H6>{skill.type}</Heading.H6>
      <Box marginY={4}>
        <List>
          {skill.items.map((skillItem) => (
            <ListItem key={skillItem} listStyle="outside">
              <Text>{skillItem}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box.Flex>
  );
}
