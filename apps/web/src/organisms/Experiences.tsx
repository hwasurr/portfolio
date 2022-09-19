import { Box, Heading, List, ListItem, Text } from '@my/components';
import { Fragment } from 'react';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function Experiences(): JSX.Element {
  return (
    <Section id={toLowerDashedCase(data.experiences.title)}>
      <Section.Title
        title={data.experiences.title}
        subtitle={data.experiences.subtitle}
      />
      <Section.Body marginY={12}>
        {data.experiences.items.map((exp) => (
          <Fragment key={exp.title}>
            <Heading.H6>
              {exp.startedAt} ~ {exp.endedAt} {exp.title}
            </Heading.H6>
            <List>
              {exp.services.map((serv) => (
                <ListItem key={serv.title}>
                  <Box marginY={2}>
                    <Text>{serv.title}</Text>
                    <Text>{serv.description}</Text>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Fragment>
        ))}
      </Section.Body>
    </Section>
  );
}
