import { useTheme } from '@emotion/react';
import { Box, Heading, List, ListItem, Text } from '@my/components';
import Section from '../components/section/Section';
import { SkillSet } from '../data/data.interface';
import data from '../data/data.ko';
import { bottomUpMotionProps } from '../utils/motions/bottomUp';
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
  return (
    <Box.GlassBox
      key={skill.type}
      display="flex"
      flexDir="column"
      justify="space-between"
      padding={8}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        color: 'rgba(0,0,0,0.85)',
        height: 350,
        [theme.displayMediaQueries.sm]: {
          height: '100%',
        },
      }}
      rounded="md"
      motionProps={bottomUpMotionProps}
    >
      <Heading.H6>{skill.type}</Heading.H6>
      <Box marginY={4} sx={{ background: 'transparent' }}>
        <List>
          {skill.items.map((skillItem) => (
            <ListItem key={skillItem} listStyle="outside">
              <Text>{skillItem}</Text>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box.GlassBox>
  );
}
