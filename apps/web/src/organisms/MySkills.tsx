import { Box, Heading, List, ListItem, Text } from '@my/components';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

// 섹션 2 - MySkills
export default function MySkills(): JSX.Element {
  return (
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
  );
}
