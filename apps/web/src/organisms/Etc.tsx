import { useTheme } from '@emotion/react';
import { Box, CustomLink, List, ListItem, Text } from '@my/components';
import MyImage from '@my/components/src/display/Image/MyImage';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function Etc(): JSX.Element | null {
  const theme = useTheme();
  if (!data.etc) return null;
  return (
    <Section id={toLowerDashedCase(data.etc.title)}>
      <Section.Title title={data.etc.title} subtitle={data.etc.subtitle} />
      <Section.Body marginY={12}>
        <List>
          {data.etc.items.map((item) => (
            <ListItem key={item.title}>
              <Box>
                {item.startedAt ? (
                  <Text color="gray" fontSize="sm">
                    {item.startedAt} {item.endedAt ? item.endedAt : null}
                  </Text>
                ) : null}
                <Text>{item.title}</Text>
                <Text fontSize="sm">{item.description}</Text>
              </Box>
            </ListItem>
          ))}
        </List>
      </Section.Body>
    </Section>
  );
}
