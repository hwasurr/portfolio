import { Box } from '@my/components';
import { H2, H4 } from '@my/components/src/layouts/Heading/Heading';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function ContactMe(): JSX.Element {
  return (
    <Section id={toLowerDashedCase(data.contactMe.title)}>
      <Section.CatchPhrase emphasis text="Contact Me" />

      <Box marginY={4}>
        {data.contactMe.items.map((contact) => (
          <H4 key={contact.title} sx={{ lineHeight: 1.2 }}>
            {contact.icon} {contact.title}
          </H4>
        ))}
      </Box>
    </Section>
  );
}
