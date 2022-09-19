import { useTheme } from '@emotion/react';
import { Box, CustomLink, Text } from '@my/components';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import type { AboutMeDescription as IAboutMeDescription } from '../data/data.interface';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

// 섹션 1 - About me
export default function AboutMe(): JSX.Element {
  const theme = useTheme();
  return (
    <Section id={toLowerDashedCase(data.aboutme.title)}>
      <Section.Title title={data.aboutme.title} subtitle={data.aboutme.subtitle} />
      <Section.Body
        marginY={12}
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: theme.spacing[4],
          [theme.displayMediaQueries.sm]: { gridTemplateColumns: '1fr' },
        }}
      >
        <Box.Flex flexDir="column" gap={2}>
          {data.aboutme.descriptions.map((desc) => (
            <AboutMeDescription
              key={desc.name}
              name={desc.name}
              value={desc.value}
              href={desc.href}
            />
          ))}
        </Box.Flex>
        <Box>
          <Text sx={{ whiteSpace: 'break-spaces' }}>{data.aboutme.introduceMyself}</Text>
        </Box>
      </Section.Body>
    </Section>
  );
}

type AboutMeDescriptionProps = IAboutMeDescription;
function AboutMeDescription({ name, value, href }: AboutMeDescriptionProps): JSX.Element {
  const theme = useTheme();
  return (
    <Box.Flex gap={4} align="center">
      <Text fontWeight="bold">{name}</Text>

      <Text
        sx={{
          fontSize: theme.fontSize.md,
          [theme.displayMediaQueries.base]: {
            fontSize: theme.fontSize.sm,
          },
        }}
      >
        {href ? (
          <CustomLink defaultColored enableUnderlineAnimation to={href}>
            {value}
          </CustomLink>
        ) : (
          value
        )}
      </Text>
    </Box.Flex>
  );
}
