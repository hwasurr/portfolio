import { Box, CustomLink } from '@my/components';
import { H4 } from '@my/components/src/layouts/Heading/Heading';
import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function ContactMe(): JSX.Element {
  return (
    <Section id={toLowerDashedCase(data.contactMe.title)} sx={{ minHeight: 'unset' }}>
      <Box.Flex justify="center">
        <Section.CatchPhrase emphasis text="Contact Me" />
      </Box.Flex>

      <Box.Flex justify="center">
        <Box marginY={4}>
          {data.contactMe.items.map((contact) => (
            <H4 key={contact.title}>
              <CustomLink isExternal to={contact.linkUrl} sx={{ lineHeight: 1.2 }}>
                {contact.icon} {contact.title}
              </CustomLink>
            </H4>
          ))}
        </Box>
      </Box.Flex>
    </Section>
  );
}
