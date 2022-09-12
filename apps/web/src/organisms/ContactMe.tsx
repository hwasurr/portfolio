import Section from '../components/section/Section';
import data from '../data/data.ko';
import { toLowerDashedCase } from '../utils/toLowerDashedCase';

export default function ContactMe(): JSX.Element {
  return (
    <Section id={toLowerDashedCase(data.contactMe.title)}>
      <Section.CatchPhrase emphasis text="Contact Me" />
      {data.contactMe.items.map((contact) => (
        <Section.CatchPhrase
          key={contact.title}
          text={
            <>
              {contact.icon} {contact.title}
            </>
          }
        />
      ))}
    </Section>
  );
}
