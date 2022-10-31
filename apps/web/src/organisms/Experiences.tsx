import { useTheme } from '@emotion/react';
import { Box, Heading, List, ListItem, Text } from '@my/components';
import Modal from '@my/components/src/modal/Modal';
import Section from '../components/section/Section';
import { Project } from '../data/data.interface';
import data from '../data/data.ko';
import useDisclosure from '../hooks/useToggle';
import { bottomUpMotionProps } from '../utils/motions/bottomUp';
import { leftSlideMotionProps, leftSlideTransition } from '../utils/motions/leftSlide';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function Experiences(): JSX.Element {
  const theme = useTheme();
  return (
    <Section id={toLowerDashedCase(data.experiences.title)}>
      <Section.Title
        title={data.experiences.title}
        subtitle={data.experiences.subtitle}
      />
      <Section.Body marginY={12} enableAnimation={false}>
        {data.experiences.items.map((exp) => (
          <Box.Flex
            marginY={12}
            key={exp.title}
            gap={4}
            sx={{
              [theme.displayMediaQueries.base]: {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{ flexShrink: 0, transition: leftSlideTransition }}
              motionProps={{
                ...leftSlideMotionProps,
                viewport: { once: true, amount: 0.2 },
              }}
            >
              <Text>
                {exp.startedAt} ~ {exp.endedAt}
              </Text>
              <Heading.H5>{exp.title}</Heading.H5>
            </Box>

            <List>
              {exp.projects.map((project) => (
                <ExperienceProjectItem key={project.title} {...project} />
              ))}
            </List>
          </Box.Flex>
        ))}
      </Section.Body>
    </Section>
  );
}

function ExperienceProjectItem(project: Project): JSX.Element {
  const theme = useTheme();
  const { open, onClose, onOpen } = useDisclosure();
  return (
    <Box.GlassBox
      key={project.title}
      sx={{ marginBottom: theme.spacing[6] }}
      rounded="md"
      motionProps={{
        ...bottomUpMotionProps,
        whileHover: { y: -4 },
        viewport: { once: true, amount: 0.2 },
      }}
    >
      <ListItem type="button" sx={{ padding: '16px 32px' }} onClick={onOpen}>
        <ProjectSummary {...project} />

        <Box paddingY={2} sx={{ background: 'transparent' }}>
          <Text fontSize="xs">자세히보려면 클릭해주세요.</Text>
        </Box>
      </ListItem>

      <Modal isOpen={open} onClose={onClose}>
        <ProjectSummary {...project} />
        <Box
          sx={{
            margin: '16px 0px',
            height: '1px',
            width: '100%',
            backgroundColor: theme.palette.gray.light,
          }}
        />
        <Text sx={{ whiteSpace: 'pre-line' }}>{project.description}</Text>
      </Modal>
    </Box.GlassBox>
  );
}

function ProjectSummary(project: Project): JSX.Element {
  return (
    <Box>
      <Text fontSize="sm">
        {project.startedAt} ~ {project.endedAt}
      </Text>

      <Text fontSize="lg" fontWeight="bold">
        {project.title}
      </Text>

      <Text fontSize="xs">{project.parts}</Text>

      <Box.Flex sx={{ background: 'transparent', columnGap: 8 }} flexWrap="wrap">
        {project.stacks.map((stack) => (
          <Text key={stack.name} fontSize="xs">
            <span style={{ color: stack.color }}>#</span>
            {stack.name}
          </Text>
        ))}
      </Box.Flex>

      <Box paddingY={2} sx={{ background: 'transparent' }}>
        <Text fontSize="sm">{project.mypart}</Text>
      </Box>
    </Box>
  );
}
