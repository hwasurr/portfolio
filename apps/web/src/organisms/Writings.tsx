import { Box, List, ListItem, Text } from '@my/components';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function Writings(): JSX.Element {
  return (
    <Section id={toLowerDashedCase(data.writings.title)}>
      <Section.Title title={data.writings.title} subtitle={data.writings.subtitle} />
      <Section.Body marginY={12}>
        <List>
          {data.writings.items.map((writing) => (
            <ListItem key={writing.title}>
              <Box.Flex gap={4}>
                <img
                  alt={writing.title}
                  src={writing.coverImageUrl}
                  style={{ borderRadius: '16px', objectFit: 'cover' }}
                />
                <Box>
                  <Text>{writing.title}</Text>
                  <Text color="gray">{writing.description}</Text>
                </Box>
              </Box.Flex>
            </ListItem>
          ))}
        </List>
      </Section.Body>
    </Section>
  );
}
