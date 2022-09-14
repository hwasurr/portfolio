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
                  alt={writing.title}
                  src={writing.coverImageUrl}
                  sx={{
                    borderRadius: theme.spacing[1],
                    objectFit: 'cover',
                    width: 150,
                    height: 150,
                    [theme.displayMediaQueries.sm]: {
                      width: 100,
                      height: 100,
                    },
                  }}
                />
                <Box>
                  <Text fontSize="sm">{writing.description}</Text>
                  <Text>{writing.title}</Text>
                  <Text color="gray">{writing.subtitle}</Text>
                </Box>
              </Box.Flex>
            </ListItem>
          ))}
        </List>
      </Section.Body>
    </Section>
  );
}
