import { useTheme } from '@emotion/react';
import { Box, CustomLink, List, ListItem, Text } from '@my/components';
import { H5 } from '@my/components/src/layouts/Heading/Heading';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { bottomUpMotionProps } from '../utils/motions/bottomUp';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function Etc(): JSX.Element | null {
  const theme = useTheme();
  if (!data.etc) return null;
  return (
    <Section id={toLowerDashedCase(data.etc.title)}>
      <Section.Title title={data.etc.title} subtitle={data.etc.subtitle} />
      <Section.Body marginY={12} enableAnimation={false}>
        {data.etc.sections.map((section) => (
          <Box
            key={section.title}
            motionProps={{
              ...bottomUpMotionProps,
              viewport: { once: true, amount: 0.4 },
            }}
            sx={{ marginBottom: theme.spacing[10] }}
          >
            <H5>{section.title}</H5>
            <List>
              {section.items.map((item) => (
                <ListItem
                  key={item.title}
                  sx={{ marginTop: theme.spacing[4], marginBottom: theme.spacing[4] }}
                >
                  <Box>
                    {item.startedAt ? (
                      <Text color="gray" fontSize="sm">
                        {item.startedAt} {item.endedAt ? `~ ${item.endedAt}` : null}
                      </Text>
                    ) : null}
                    <Text fontWeight="bold">
                      {item.title}
                      {item.linkUrl && (
                        <CustomLink
                          defaultColored
                          enableUnderlineAnimation
                          to={item.linkUrl}
                        >
                          (링크)
                        </CustomLink>
                      )}
                    </Text>
                    <Text fontSize="sm">{item.description}</Text>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Section.Body>
    </Section>
  );
}
