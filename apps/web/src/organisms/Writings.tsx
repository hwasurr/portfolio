import { useTheme } from '@emotion/react';
import { Box, List, ListItem, Text } from '@my/components';
import MyImage from '@my/components/src/display/Image/MyImage';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function Writings(): JSX.Element {
  const theme = useTheme();
  return (
    <Section id={toLowerDashedCase(data.writings.title)}>
      <Section.Title title={data.writings.title} subtitle={data.writings.subtitle} />
      <Section.Body marginY={12}>
        <List>
          {data.writings.items.map((writing) => (
            <ListItem key={writing.title}>
              <Box.Flex gap={4}>
                <MyImage
                  draggable={false}
                  alt={writing.title}
                  src={writing.coverImageUrl}
                  sx={{
                    borderRadius: theme.spacing[1],
                    objectFit: 'contain',
                    width: 150,
                    height: 120,
                    [theme.displayMediaQueries.sm]: {
                      width: 120,
                      height: 100,
                    },
                  }}
                />
                <Box>
                  <Text fontSize="sm">{writing.description}</Text>
                  <Text>{writing.title}</Text>
                  <Text color="gray">{writing.subtitle}</Text>
                  <Box.Flex gap={1} marginY={1}>
                    <MyImage
                      width="20"
                      height="20"
                      src={writing.publisher.publisherImageUrl}
                      alt={writing.publisher.name}
                      draggable={false}
                    />
                    <Text fontSize="sm">{writing.publisher.name}</Text>
                  </Box.Flex>
                </Box>
              </Box.Flex>
            </ListItem>
          ))}
        </List>
      </Section.Body>
    </Section>
  );
}
