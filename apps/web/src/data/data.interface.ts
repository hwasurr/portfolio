export interface PortfolioSectionBase {
  title: string;
  subtitle: string;
}

export type CatchPhrase = (
  | string
  | {
      delay: number;
      words: string[];
    }
)[];
export interface LandingSection extends PortfolioSectionBase {
  catchPhrase: CatchPhrase;
}

export interface AboutMeDescription {
  name: string;
  value: string;
  href?: string;
}
export interface AboutMe extends PortfolioSectionBase {
  descriptions: AboutMeDescription[];
  introduceMyself: string;
}

export interface SkillSet {
  type: 'Frontend' | 'Backend' | 'DevOps' | 'Tools and etc.';
  items: string[];
}
export interface MySkills extends PortfolioSectionBase {
  skillSet: SkillSet[];
}

export interface ExperienceService {
  title: string;
  startedAt: string;
  endedAt: string;
  services: { title: string; description: string }[];
}
export interface Experiences extends PortfolioSectionBase {
  items: ExperienceService[];
}

export type WritingLink = {
  coverImageUrl: string;
  title: string;
  subtitle?: string;
  linkUrl: string;
  description?: string;
  publisher: {
    name: string;
    nameInEn?: string;
    publisherImageUrl?: string;
  };
};
export interface Writings extends PortfolioSectionBase {
  items: WritingLink[];
}

export type ContactLink = { icon: JSX.Element; title: string; linkUrl: string };
export interface ContactMe extends PortfolioSectionBase {
  items: ContactLink[];
}

export type PortfolioData = {
  landingSection: LandingSection;
  aboutme: AboutMe;
  mySkills: MySkills;
  experiences: Experiences;
  writings: Writings;
  contactMe: ContactMe;
};
