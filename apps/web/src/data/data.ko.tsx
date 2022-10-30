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
        startedAt: '2019.05',
        endedAt: '2020.07',
        title: '와일트루',
        projects: [
          {
            title: '1인 미디어 광고 매칭 및 송출 플랫폼 온애드',
            startedAt: '2019.05',
            endedAt: '2020.07',
            stacks: [
              { name: 'React', color: '#61DBFB' },
              { name: 'Express', color: '#007acc' },
              { name: 'MariaDB', color: 'rgb(224,35,78)' },
              { name: 'Socket.io', color: 'rgb(55,111,159)' },
              { name: 'Selenium, scrapy', color: 'rgb(255, 207, 63)' },
            ],
            parts: '기획 2인 / 개발 4인 / 분석 1인',
            mypart:
              '저는 리드 개발자(풀스택)로 업무에 임하였습니다. DB설계,인프라 구성, 데이터 수집, 백엔드, 프론트엔드, 자동화 배치작업 구성 등의 업무를 담당했습니다. 이와 함께, 스크럼 마스터의 역할도 함께 수행하였습니다.',
            description: `1인 미디어의 광고 계약 및 송출은 거의 자동화의 손이 닿지 않는 영역이었습니다. 광고주와 방송인은 광고 진행마다 번거로운 1:1 계약 작업을 진행해야 했습니다. 또한 표준 없이 진행되는 계약으로 인해 실제 성과와 관련없는 광고단가가 형성되었습니다. 온애드는 1인 미디어 광고를 투명하고 효율적으로 진행할 수 있는 환경을 제공하는 것을 목표로 하였습니다.
            
            서비스에서 제공하는 주요 기능은 다음과 같습니다.
            
            1. 광고주는 한 번의 클릭으로 다수의 방송인에게 광고를 송출할 수 있다.
            2. 방송인은 방송에만 집중하고, 광고는 자동으로 송출할 수 있는 환경을 제공한다.
            3. 진행중인 컨텐츠 또는 채팅창 분위기에 알맞는 광고가 자동으로 매칭되어 송출된다.
            4. 노출수와 클릭수에 비례하여 광고비가 투명하게 책정된다.
            
            해당 서비스는 많은 호응을 얻어 출시 이후 3,000명 이상의 Twitch 스트리머, 아프리카TV 방송인이 이용하였으며, 동일한 기능을 제공하는 카피캣 서비스가 등장하기도 했습니다. 현재 서비스는 종료된 상태입니다.
            
            ## 팀원 구성 및 나의 역할
            
            기획 2인 / 개발 4인 / 분석 1인
            저는 리드 개발자(풀스택)로 업무에 임하였습니다. DB설계,인프라 구성, 데이터 수집, 백엔드, 프론트엔드, 자동화 배치작업 구성 등의 업무를 담당했습니다. 이와 함께, 스크럼 마스터의 역할도 함께 수행하였습니다.
            
            ## 주요 기술 스택
            
            - React (JS - TS 리팩토링)
            - Express (JS - TS 리팩토링)
            - Socket.io
            - Selenium, scrapy (Python 데이터 수집)
            
            ## 작업 세부 내용
            
            - 체계와 개발 문화 정착을 위한 노력
              체계가 전혀 없는 상태에서 개발을 지속해나가며 비효율을 느껴 올바른 개발 문화 조성 및 개발 방법론의 도입을 심각히 고려하게 되었습니다. 주도적으로 애자일 방법론(스크럼)을 학습하며 사내 공유 세션을 주최하여 팀의 고유한 개발 문화와 규칙들을 만들고 지속 발전 가능한 환경을 조성했습니다.
            
            - 방송플랫폼 API 연동 및 데이터 수집 및 자동화
              서비스는 광고 효율성을 위해 방송 데이터와 채팅 데이터를 활용하고자 했습니다. Selenium과 Twitch에서 제공하는 API를 활용해 방송 및 채팅 데이터를 수집하는 배치작업을 구성하였습니다. 구성된 데이터 수집 작업과 동료가 작업한 데이터 분석 작업을 Fargate 스케쥴링을 통해 주기적으로 실행될 수 있도록 구성하였습니다.
            
            - 웹 플랫폼 서비스 개발
              서비스는 유저가 활용할 수 있는 웹 플랫폼을 구성하고자 하였습니다. 하나의 API 백엔드와, 이와 통신하는 3개의 프론트엔드 웹 앱(방송인/광고주/관리자)을 구성하였습니다. Express로 구성한 BFF 방식의 API 백엔드와 React로 구성한 프론트엔드 SPA를 구성하였습니다.
            
            - 인프라 아키텍처 학습 및 구성
              서비스의 배포 및 테스트 환경 구성을 위해 주도적으로 클라우드 서비스를 다루고자 노력하였습니다. 부산에서 진행한 AWS 교육 과정을 수료하고, 지속적인 학습을 통해 S3, Amplify, RDS, ECS Fargate, Route53, ACM 등을 활용한 기본적인 수준의 인프라를 구성할 수 있었습니다.
            
            - TS 리팩토링
              백/프론트엔드 모두 JS 기반으로 구성되어, 런타임에서 오류가 자주 발생하였습니다. 이를 해결하기 위해 TS 도입 리팩토링을 주도하였습니다. 도입 이후 런타임에러의 상당수가 컴파일 단계에서 잡혀, 오류 발생 빈도가 현저히 줄어드는 결과를 얻었습니다.
            
            - 백엔드 Nestjs 리팩토링
              API 서버는 Express가 주는 자유로 인해 일관된 구조 없이 방대해지고 있었습니다. 점차 새로운 기능 추가와 유지보수가 어려워졌고, 향후 개발 안정성을 위해 Nestjs 리팩토링을 주도하였습니다.
              기능 변경 없이 구조만 변경하고자 하였으나 여러 작업이 결합된 경우 별개의 모듈로 구분해야 했고, 이 과정에서 기능이 조금씩 변경되는 버그가 여럿 발생했고, 몇차례 핫픽스를 통해 해결했습니다. 유닛테스트의 중요성을 깨닫는 계기였습니다.
            `,
          },
        ],
      },
      {
        startedAt: '2020.07',
        endedAt: '2022.06',
        title: '트루포인트',
        projects: [
          {
            title: '1인 미디어 데이터 분석 솔루션 - 트루포인트',
            startedAt: '2020.07',
            endedAt: '2021.06',
            stacks: [
              { name: 'Typescript', color: '#007acc' },
              { name: 'React', color: '#61DBFB' },
              { name: 'Recharts', color: '#61DBFB' },
              { name: 'Nestjs(REST)', color: 'rgba(224,35,78)' },
              { name: 'MySQL/MariaDB(TypeORM)', color: 'rgba(224,35,78)' },
              { name: 'Selenium, scrapy', color: 'rgba(67,176,42)' },
            ],
            parts: '기획 2인 / 개발 1~4인 / 분석 2인 / 디자이너 1인',
            mypart:
              '저는 리드 개발자(풀스택)로 업무에 임하였습니다. DB설계,인프라 구성, 데이터 수집, 백엔드, 프론트엔드, 자동화 배치작업 구성, CI/CD 구성 등의 업무를 담당했습니다. 이와 함께, 스크럼 마스터의 역할도 함께 수행하였습니다.',
            description: `트루포인트는 긴 1인 미디어 풀 영상에서 얻을 수 있는 다양한 데이터를 하이라이트 구간 및 시청자 여론을 분석한 지표를 제공하는 분석 솔루션 입니다. 트루포인트는 다음과 같은 기능을 가집니다.

1. 영상/채팅 내용을 분석하여 하이라이트 구간 및 편집구간을 찾아 방송인 또는 유튜브 편집자에게 제공합니다.
2. 채팅 내용을 정량/정성적으로 분석하여 방송별 시청자 반응을 분석하여 제공합니다.

(트루포인트는 앞서 근무했던 와일트루와 동일한 회사로, 사업적 이유로 사내 이직한 것입니다.)

## 팀원 구성 및 나의 역할

기획 2인 / 개발 1~4인 / 분석 2인 / 디자이너 1인
저는 리드 개발자(풀스택)로 업무에 임하였습니다. DB설계,인프라 구성, 데이터 수집, 백엔드, 프론트엔드, 자동화 배치작업 구성, CI/CD 구성 등의 업무를 담당했습니다. 이와 함께, 스크럼 마스터의 역할도 함께 수행하였습니다.

## 주요 기술 스택

- Typescript
- React, Recharts
- Nestjs(REST), MySQL/MariaDB(TypeORM)
- Selenium, scrapy (Python 데이터 수집)

## 작업 세부 내용

- 모노레포 프로젝트 구성
  앞선 프로젝트를 진행하며 느꼈던 구조적 불편함을 해결하고 싶었습니다. yarn workspaces를 통해 모노레포를 구성하여 DTO, 공용 타입, 유틸함수 등 여러 패키지에 거쳐 공유되는 코드를 개별 라이브러리로 구분하였습니다. 이를 통해 반복코드를 최소화할 수 있었습니다. 또한 코딩 컨벤션과 관련된 글로벌 설정(Eslint, Prettier, Commitlint, husky, ...)을 전체 패키지에 적용하여 모든 팀원이 동일한 스타일로 작업을 처리할 수 있게 하였습니다.

- Atomic Design
  재사용 가능한 리액트 컴포넌트를 일관성 있게 구성하기 위해 Atomic Design 패턴을 따르도록 구조를 잡는 작업을 진행했습니다. 이후 구조 공유를 위한 프론트엔드 팀원들과의 공유 세션을 주도하였습니다. 미흡하지만 앞선 프로젝트에 비해 효율적으로 UI 컴포넌트를 개발할 수 있었습니다.

- Github Actions를 활용한 CI/CD
  각 환경별 브랜치에 코드를 푸시할 때마다 실행되는 CI/CD 파이프라인을 구성하였습니다. CI 작업에서는 Lint, Test, Build 작업을 진행하고, CD 작업에서는 Docker 컨테이너화 및 레지스트리 전달, 새로운 버전의 ECS작업 롤링 업데이트 배포를 자동으로 진행하도록 구성하였습니다. 이 작업 이후 개발 스프린트 단위를 더 짧게 설정하여 업데이트를 더 자주 진행할 수 있었습니다.

- AWS CDK를 활용한 Infrastructure as Code
  유사한 인프라 구조를 여러 환경으로 구성하는 작업을 반복하면서 인프라를 코드로 관리할 필요성을 느꼈습니다. Terraform과 CDK 중, 타입스크립트로 구성할 수 있는 CDK를 선정하여 학습기간을 가진 뒤, 인프라를 반복적으로 프로비저닝할 수 있도록 구성하였습니다. 이를 통해 개발 환경과 테스트 환경, 프로덕션 환경을 쉽게 구성할 수 있었습니다.

- 차트라이브러리를 활용한 시각 지표 제공
  Recharts, chartjs 를 활용하여 분석된 지표를 시각적 쉽게 확인할 수 있는 대시보드를 구성하였습니다.

- Slack 봇 구성
  새로운 방송인의 가입 및 문의 등록과 같이 관리자가 확인해야 할 상황이 발생한 경우 관리자용 슬랙 채널로 자동으로 알릴 수 있도록 Slack 봇을 구성하였습니다. 이를 통해 관리자가 더 빠르게 대처할 수 있었습니다.`,
          },
          {
            title: '크크쇼: 크리에이터 라이브 커머스',
            startedAt: '2021.07',
            endedAt: '2022.06',
            stacks: [
              { name: 'Typescript', color: '#007acc' },
              { name: 'Nextjs', color: '#61DBFB' },
              { name: 'react-query', color: 'purple' },
              { name: 'Nestjs(REST)', color: 'rgb(224,35,78)' },
              { name: 'Redis', color: 'brown' },
              { name: 'MySQL/MariaDB(Prisma)', color: 'teal' },
              { name: 'Lambda serverless', color: '#FF9900' },
            ],
            parts: '기획 1인 / 개발 2~4인 / 디자이너 1인',
            mypart:
              '저는 리드 개발자(풀스택)로 업무에 임하였습니다. DB설계,인프라 구성, 데이터 수집, 백엔드, 프론트엔드, 자동화 배치작업 구성, CI/CD 구성 등의 업무를 담당했습니다. 이와 함께, 스크럼 마스터의 역할도 함께 수행하였습니다.',
            description: `크크쇼는 1인 미디어 라이브 커머스 플랫폼입니다. 크크쇼를 통해 방송인은 쉽게 라이브커머스를 준비하고 진행할 수 있으며, 판매자는 크크쇼가 진행하는 라이브커머스를 통해 더 효율적으로 물건을 판매할 수 있습니다.

            크크쇼에서는 다음과 같은 기능을 제공합니다.
            
            - 판매자: 매출, 상품 및 주문관리, 출고 관리 등 기본적인 커머스 기능과 라이브 커머스 진행 관리 기능
            - 방송인: 라이브 커머스를 통한 수익 창출 및 관리 기능과 라이브 방송 화면에 띄울 수 있는 동적 상품 오버레이 디스플레이
            - 플랫폼: 라이브 진행 중인 상품을 시청자가 구매할 수 있는 커머스 기능과 실시간 구매 알림
            
            크크쇼는 모든 판매자의 라이브커머스 재진행률 80% 이상을 기록하는 등 소상공인 판매자에게 많은 호응을 얻었습니다.
            
            ## 팀원 구성 및 나의 역할
            
            기획 1인 / 개발 2~4인 / 디자이너 1인
            저는 리드 개발자(풀스택)로 업무에 임하였습니다. DB설계,인프라 구성, 데이터 수집, 백엔드, 프론트엔드, 자동화 배치작업 구성, CI/CD 구성 등의 업무를 담당했습니다. 이와 함께, 스크럼 마스터의 역할도 함께 수행하였습니다.
            
            ## 주요 기술 스택
            
            - Typescript
            - Nextjs, react-query
            - Nestjs(REST), MySQL/MariaDB(Prisma), Redis
            - Lambda 서버리스
            
            ## 작업 세부 내용
            
            - 프로젝트 관리 nx monorepo
              앞선 프로젝트에서 monorepo 구성하면서, 필요 없는 패키지도 함께 배포되는 등 CI/CD 작업이 비효율적으로 진행되는 것을 확인하였습니다. 이에, 패키지간 의존관계를 파악하여 실제 변경된 패키지만 배포될 수 있는 환경을 조성할 필요가 있다고 느꼈습니다. 이를 위해 Nx 빌드 시스템 통해 프로젝트를 구성하고 CI/CD 과정을 재구성하여 해당 문제를 해결할 수 있었습니다. 또한 Nx 프로젝트의 기본적인 사용법을 팀원에게 공유하는 세션을 진행하기도 했습니다.
            
            - 스크럼 테일러링
              조직원이 줄어든 상황에서 스크럼 방식이 예전과 달리 비교적 어울리지 않는다는 내부 피드백과 함께, 자주 발생해왔던 문제인 백로그가 특정 상태에 오래 머물러 있는 병목현상을 해결하고싶다는 생각을 했습니다. 몇 가지 방법을 팀원들과 함께 고민한 끝에, 기존 스크럼 방식에서 각 작업 상태에 WIP 제한을 두기로 결정하였습니다. 이 결과 병목현상이 거의 사라졌으며, 더 체계적으로 스프린트를 진행할 수 있었습니다.
            
            - Nextjs SSR,ISR,CSR
              Nextjs의 Incremental Static Regeneration 방식으로 여러 라이브 커머스 상품을 동적으로 추가하고 정적 페이지를 생성하도록 구성하여, 상품 페이지를 고객에게 더 빠르게 전달할 수 있는 환경을 조성하였습니다.
              이와 함께, 정적 사이트 생성시 react-query로 불러온 데이터를 하위 컴포넌트에 hydration 하도록 구성하여 prop drilling을 해결하기도 했습니다.
            
            - Redis를 활용한 캐시처리
              API 서버 로그를 분석했을 때 대부분의 요청은 읽기 작업이었으며, 트래픽이 몇 가지 엔드포인트에 집중되어 있는 것을 확인하였습니다. 레디스를 캐시 계층으로 사용하여 자주 요청되는 엔드포인트 응답을 캐시하도록 구성해 더 효율적이고 신속한 응답을 가능하게 하였습니다.
              이후 캐시 처리 작업을 서비스 계층에 구현하면서 동일 작업이 여러번 반복되어 나타나는 것을 확인하였고, 제어 역전을 통해 서비스 로직에 결합된 캐시처리 과정을 분리하여 구성할 수 있는 인터셉터를 구성기도 하였습니다.
            
            - Redis 메시지큐
              실시간성이 필요한 작업을 레디스(ElastiCache)를 메시지큐로 구성하여, 빠르고 신뢰성 있는 실시간 처리를 가능하게 하였습니다.
            
            - lambda 서버리스를 활용한 마이크로서비스
              작은 규모의 독립적 작업은 AWS 서버리스 lambda로 구성하고 AWS CDK를 통해 배포하고 관리하였습니다.`,
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
