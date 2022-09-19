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
    subtitle: '잘 동작하는 웹 서비스를 만듭니다.',
  },
  aboutme: {
    title: 'Who Am I',
    subtitle: '저를 소개합니다.',
    descriptions: [
      { name: '이름', value: '강화수' },
      { name: '생년월', value: '1994년 09월' },
      {
        name: '이메일',
        value: 'iamsupermazinga@gmail.com',
        href: 'mailto:iamsupermazinga@gmail.com',
      },
      { name: '연락처', value: '010-3974-5175' },
      {
        name: '깃허브',
        value: 'https://github.com/hwasurr',
        href: 'https://github.com/hwasurr',
      },
      { name: '블로그', value: 'https://hwasurr.io', href: 'https://hwasurr.io' },
    ],
    introduceMyself: `안녕하세요! 언제나 성장이 고픈 개발자 강화수입니다. 새로운 것을 배우는 것을 꺼리지 않으며, 언제나 더 깊은 전문성을 갖추기 위해 부단히 노력합니다. 주로 TypeScript 기반의 웹 서비스를 만듭니다. 프론트엔드와 백엔드 영역을 가리지 않고 모두 즐겁게 개발하고 있습니다. 게임 개발 및 게임 관련 서비스에도 관심이 많습니다.
    
예측가능하며 재사용성을 갖춘 코드를 구성하고자 노력합니다. 지속적으로 배포되고 발전할 수 있는 시스템을 구성하기를 좋아합니다. 
주로 스타트업에서 근무하여, 서비스를 개발자의 관점에서만 바라보지 않고 조직적/사업적/운영적 측면을 함께 고려하고자 노력해왔습니다.
\n협업 제안, 문의, 친목 등 어떠한 내용으로 연락해도 좋습니다.
\n가장 즐겁게 플레이한 게임: 오브라딘호의 귀환, 하데스, 문명6, 하스스톤`,
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
        coverImageUrl: '/images/book1_cover.jpeg', // TODO: 향후 수정 필요
        title: 'GraphQL과 타입스크립트로 개발하는 웹 서비스',
        subtitle: '설계부터 개발, 배포까지 따라하며 완성하는 웹 풀스택 개발',
        linkUrl: '#',
        description: '2022. 10. 출간예정',
        publisher: {
          name: '비제이퍼블릭',
          nameInEn: 'BJpublic',
          publisherImageUrl: '/images/bjpublic.jpg',
        },
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
