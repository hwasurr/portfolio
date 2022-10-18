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
    
결과 예측이 가능하며 재사용성을 갖춘 코드를 구성하고자 노력합니다. 지속적으로 배포되고 발전할 수 있는 시스템을 구성하기를 좋아합니다. 
서비스를 기술적 관점에서만 바라보지 않고 조직적/사업적/운영적 측면을 함께 고려합니다.
\n영입 제안, 협업 제안, 문의, 친목 등 어떠한 내용으로 연락해도 좋습니다.
\n가장 즐겁게 플레이한 게임: 오브라딘호의 귀환, 하데스, 문명6, 하스스톤`,
  },
  mySkills: {
    title: 'My Skills',
    subtitle:
      '이런 기술을 활용할 수 있습니다. 또한 새로운 기술을 학습하는 것에 주저하지 않습니다.',
    skillSet: [
      {
        type: 'Frontend',
        items: [
          'React + Typescript',
          'Framework: Next.js, Gatsby.js',
          'GraphQL Clients: (apollo, urql)',
          'Remove-data-management: (react-query, swr)',
          'State-management libs: (zustand, valtio, jotai)',
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
            title: '1인 미디어 광고 매칭 및 송출 플랫폼(서비스종료)',
            description: `1인 미디어 스트리머, Bj의 방송화면에 현재 방송중인 컨텐츠와 채팅 분위기 등의 데이터에 따라 알맞는 광고를 자동으로 송출해 주는 서비스입니다. 현재는 서비스를 종료하였습니다.
            광고주/방송인 웹 대시보드화면과 기능을 구성하고, 관리자페이지를 구성하였습니다.
            4~5인의 개발자와 2~3인의 기획 및 운영자와 함께 서비스를 구성했습니다.
            API 서버, 챗봇서버, 광고송출서버, 광고추적서버, 메일링 서버 등을 구성하였고,
            Twitch, Youtube, AfreecaTV 등 스트리밍 플랫폼의 방송 및 채팅 데이터를 정기적으로 수집하는 파이프라인을 구성하였습니다.
            이와 함께 광고 효과 분석을 위한 분석자동화 시스템과 광고 대금의 처리를 위한 광고비 계산 시스템을 구축했습니다.
            
            Javascript, React, Express, Socket.io
            MariaDB, MySQL
            Python, Selenium, Scrapy, SQLAlchemy, cron
            
            `,
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
        coverImageUrl: '/images/book_cover-removebg-preview.png',
        title: 'GraphQL과 타입스크립트로 개발하는 웹 서비스',
        subtitle: '설계부터 개발, 배포까지 따라하며 완성하는 웹 풀스택 개발',
        linkUrl: 'https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=302978770',
        description: '2022. 10. 14.',
        publisher: {
          name: '비제이퍼블릭',
          nameInEn: 'BJpublic',
          publisherImageUrl: '/images/bjpublic.jpg',
          publisherHomepage: 'https://bjpublic.tistory.com/',
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
