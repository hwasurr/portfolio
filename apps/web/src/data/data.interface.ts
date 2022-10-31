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
export interface ProjectStack {
  name: string;
  color: string;
}
export interface Project {
  title: string;
  description: string;
  startedAt: string;
  endedAt: string;
  stacks: ProjectStack[];
  parts: string;
  mypart: string;
}
export interface ExperienceService {
  title: string;
  startedAt: string;
  endedAt: string;
  projects: Project[];
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
    publisherHomepage?: string;
  };
};
export interface Writings extends PortfolioSectionBase {
  items: WritingLink[];
}

export type ContactLink = { icon: JSX.Element; title: string; linkUrl: string };
export interface ContactMe extends PortfolioSectionBase {
  items: ContactLink[];
}

export type EtcItem = {
  title: string;
  description: string;
  linkUrl?: string;
  startedAt?: string;
  endedAt?: string;
};
export interface Etc extends PortfolioSectionBase {
  items: EtcItem[];
}

export type PortfolioData = {
  landingSection: LandingSection;
  aboutme: AboutMe;
  mySkills: MySkills;
  experiences: Experiences;
  writings: Writings;
  etc?: Etc;
  contactMe: ContactMe;
};
