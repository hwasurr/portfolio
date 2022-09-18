import { MdMail, MdRssFeed } from 'react-icons/md';
import { VscGithub } from 'react-icons/vsc';
import { PortfolioData } from './data.interface';

export const data: PortfolioData = {
  landingSection: {
    title: '',
    catchPhrase: [
      'i create ',
      { delay: 2000, words: ['readable', 'efficient', 'stable'] },
      ' code.',
    ],
    subtitle: '웹서비스를 만듭니다',
  },
  aboutme: {
    title: 'Who Am I',
    subtitle: '저를 소개합니다.',
    descriptions: [
      { name: '이름', value: '강화수' },
      { name: '생년월', value: '1994년 09월' },
      { name: '이메일', value: 'iamsupermazinga@gmail.com' },
      { name: '연락처', value: '010-3974-5175' },
      { name: '깃허브', value: 'https://github.com/hwasurr' },
      { name: '블로그', value: 'https://hwasurr.io' },
    ],
    introduceMyself: `성장이 고픈 개발자 강화수입니다. 현재는 Typescript 기반의 웹 서비스를 만듭니다.\n개발하며 무엇을 추구하는지 작성.\n게임에대한열정어필,가장즐겁게한게임:오브라딘호의귀환, 하데스\n\n협업 제안, 문의, 친목 등 어떠한 내용으로 연락해도 괜찮습니다.`,
  },
  mySkills: {
    title: 'My Skills',
    subtitle:
      '이런 기술을 활용할 수 있습니다. 새로운 기술을 학습할 생각에 언제나 설레입니다.(?)',
    skillSet: [
      {
        type: 'Frontend',
        items: [
          'React + Typescript',
          'Framework: Next.js, Gatsby.js',
          'GraphQL Clients: (apollo, urql)',
          'Remove-data-management: (react-query, swr)',
          'State-management libs: (zustand, vatio, jotai)',
          'Animations: (framer-motion)',
          'Styling: (emotion, chakra-ui, material-ui)',
        ],
      },
      {
        type: 'Backend',
        items: [
          'Node.js + Typescript',
          'Framework: Nestjs',
          'Server: express',
          'Database: MySQL, MariaDB, Postgres',
          'ORM: Prisma, typeorm',
          'In-memory Database: Redis, ElastiCache',
          'Messaging: Redis, Socket.io',
          'Scripting: Python',
        ],
      },
      {
        type: 'DevOps',
        items: [
          'CI/CD: Github Actions, AWS CodePipeline, Travis CI',
          'IaC: AWS Cloud Development Kit, CloudFormation',
          'Monitoring: CloudWatch',
        ],
      },
      {
        type: 'Tools and etc.',
        items: [
          'Container Platform: Docker, AWS ECR/ECS',
          'Configuration Management: Git, Github',
          'System Management: AWS IAM/SSM/Secrets Manager',
          'Hosting: Vercel, AWS S3/Amplify Hosting',
          'Agile: Scrum, Kanban',
        ],
      },
    ],
  },
  experiences: {
    title: 'Experiences',
    subtitle: '이런 여정을 걸어왔습니다.',
    items: [
      {
        startedAt: '2018.07',
        endedAt: '2022.06',
        title: '와일트루/트루포인트 공동창업 및 개발팀 리드',
        services: [
          {
            title: '1인 미디어 광고 플랫폼',
            description: '무슨 기술로 / 어떤 방식으로 만들어왔고 내가 무엇을 했는 지',
          },
          {
            title: '1인 미디어 하이라이트 구간 추출 서비스',
            description: '무슨 기술로 / 어떤 방식으로 만들어왔고 내가 무엇을 했는 지',
          },
          {
            title: '1인 미디어 라이브커머스 플랫폼',
            description: '무슨 기술로 / 어떤 방식으로 만들어왔고 내가 무엇을 했는 지',
          },
        ],
      },
    ],
  },
  writings: {
    title: 'Writings',
    subtitle: '',
    items: [
      {
        coverImageUrl:
          'https://img.itch.zone/aW1nLzgxNzU0MDUucG5n/300x240%23c/f%2BVlsD.png', // TODO: 향후 수정 필요
        title: 'GraphQL과 타입스크립트로 개발하는 웹 서비스',
        subtitle: '설계부터 개발, 배포까지 따라하며 완성하는 웹 풀스택 개발',
        linkUrl: '#',
        description: '2022. 10. 출간예정',
      },
    ],
  },
  contactMe: {
    title: 'Contact Me',
    subtitle: '',
    items: [
      {
        icon: <VscGithub />,
        title: '깃허브',
        linkUrl: 'https://github.com/hwasurr',
      },
      {
        icon: <MdRssFeed />,
        title: '블로그',
        linkUrl: 'https://hwasurr.io',
      },
      {
        icon: <MdMail />,
        title: '이메일',
        linkUrl: 'mailto:iamsupermazinga@gmail.com',
      },
    ],
  },
};

export default data;
