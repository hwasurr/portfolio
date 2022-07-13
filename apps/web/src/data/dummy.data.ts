export interface IGameCard {
  id: number;
  titleEmoji: string;
  /** en name */
  gamename: string;
  title: string;
  summary: string;
  image: {
    alt: string;
    src: string;
  };
  tags: Array<{
    color: string;
    title: string;
  }>;
  metaInfos: Array<{
    color: string;
    title: string;
  }>;
  reactions: {
    emojis: string[];
    count: number;
  };
  commentCount: number;
  createdAt: string;
}

export const dummyGames: IGameCard[] = [
  {
    id: 1,
    commentCount: 30,
    gamename: 'FindChanges',
    createdAt: '22. 07. 13',
    image: {
      src: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FU99Er%2FbtqCQ275m2f%2Fbf2sAkehTKMsjoyC9sNU9K%2Fimg.jpg',
      alt: 'test2',
    },
    metaInfos: [
      { title: '오프라인전용', color: 'primary' },
      { title: '정보제공', color: 'primary' },
    ],
    reactions: {
      emojis: ['👏', '👍'],
      count: 30,
    },
    summary:
      '게임 방법: 팀을 두 그룹으로 나누고 두 그룹이 서로 마주 보고 서게 합니다. A팀은 주어진 시간 동안(15~30초) 앞에 서 있는 사람의 모습을 빠르게 관찰하며최대한 많은 것을 기억합니다. A 팀이 뒤로 돌아서면 B 팀은 겉모습에서 최대한많은 것을 바꿉니다. 서 있는 순서 바꾸기, 옆 사람과 신발을 바꿔 신기, 머리모양 바꾸기 등 겉모습을 바꾸는 것이라면 무엇이든 허용됩니다. 45초 후 A팀은 다시 뒤로 돌아서고 5~10분 동안 바뀐 것을 찾아냅니다. 그룹의 규모에따라 시간을 조정할 수 있습니다.',
    tags: [
      { color: 'lightpink', title: '경쟁요소' },
      { color: 'primary', title: '팀규모 3~5 명' },
      { color: 'success', title: '야외/입식' },
      { color: 'secondary', title: '2~3분 소요' },
      { color: 'error', title: '실내/좌식' },
    ],
    title: '바뀐 모습 찾기',
    titleEmoji: '🦄',
  },
  {
    id: 2,
    commentCount: 30,
    createdAt: '22. 07. 13',
    gamename: 'Two truth and one lie',
    image: {
      src: 'https://picsum.photos/600/400',
      alt: 'test1',
    },
    metaInfos: [
      { title: '온라인가능', color: 'primary' },
      { title: '가이드제공', color: 'primary' },
    ],
    reactions: {
      emojis: ['💖', '👏', '👍'],
      count: 30,
    },
    summary:
      '모든 팀원이 자신에 관한 두 가지 진실과 한 가지 거짓말을 생각하게 합니다. 진실이 인상적일수록(예: 코스타리카에서 스카이다이빙을 해봤습니다), 거짓말 믿을 만할수록(예: 강아지 두 마리를 키웁니다) 게임은 더욱 흥미진진해집니다 그런 다음, 각 팀원에게 자신에 관한 진실 두 가지와 거짓말 한 가지를 제시할 것 요청하여 무엇이 거짓말 같은지 팀이 투표를 진행합니다.',
    tags: [
      { color: 'primary', title: '팀규모 3~5 명' },
      { color: 'warn', title: '2~3분 소요' },
      { color: 'error', title: '실내/좌식' },
      { color: 'success', title: '야외/입식' },
      { color: 'lightpink', title: '소규모' },
    ],
    title: '두 가지 진실과 한 가지 거짓말',
    titleEmoji: '🧙',
  },
  {
    id: 3,
    commentCount: 30,
    gamename: 'changeseeker',
    createdAt: '22. 07. 13',
    image: {
      src: 'https://res.cloudinary.com/practicaldev/image/fetch/s--JL9m9ZUR--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rj5848hnd5n57li42tsz.png',
      alt: 'test2',
    },
    metaInfos: [
      { title: '오프라인전용', color: 'primary' },
      { title: '정보제공', color: 'primary' },
    ],
    reactions: {
      emojis: ['👏', '👍'],
      count: 30,
    },
    summary:
      '게임 방법: 팀을 두 그룹으로 나누고 두 그룹이 서로 마주 보고 서게 합니다. A팀은 주어진 시간 동안(15~30초) 앞에 서 있는 사람의 모습을 빠르게 관찰하며최대한 많은 것을 기억합니다. A 팀이 뒤로 돌아서면 B 팀은 겉모습에서 최대한많은 것을 바꿉니다. 서 있는 순서 바꾸기, 옆 사람과 신발을 바꿔 신기, 머리모양 바꾸기 등 겉모습을 바꾸는 것이라면 무엇이든 허용됩니다. 45초 후 A팀은 다시 뒤로 돌아서고 5~10분 동안 바뀐 것을 찾아냅니다. 그룹의 규모에따라 시간을 조정할 수 있습니다.',
    tags: [
      { color: 'lightpink', title: '경쟁요소' },
      { color: 'primary', title: '팀규모 3~5 명' },
      { color: 'success', title: '야외/입식' },
      { color: 'secondary', title: '2~3분 소요' },
      { color: 'error', title: '실내/좌식' },
    ],
    title: '바뀐 모습 찾기',
    titleEmoji: '☂️',
  },
  {
    id: 4,
    commentCount: 30,
    gamename: 'ttol',
    createdAt: '22. 07. 13',
    image: {
      src: 'https://picsum.photos/601/401',
      alt: 'test1',
    },
    metaInfos: [
      { title: '온라인가능', color: 'primary' },
      { title: '가이드제공', color: 'primary' },
    ],
    reactions: {
      emojis: ['💖', '👏', '👍'],
      count: 30,
    },
    summary:
      '모든 팀원이 자신에 관한 두 가지 진실과 한 가지 거짓말을 생각하게 합니다. 진실이 인상적일수록(예: 코스타리카에서 스카이다이빙을 해봤습니다), 거짓말 믿을 만할수록(예: 강아지 두 마리를 키웁니다) 게임은 더욱 흥미진진해집니다 그런 다음, 각 팀원에게 자신에 관한 진실 두 가지와 거짓말 한 가지를 제시할 것 요청하여 무엇이 거짓말 같은지 팀이 투표를 진행합니다.',
    tags: [
      { color: 'primary', title: '팀규모 3~5 명' },
      { color: 'warn', title: '2~3분 소요' },
      { color: 'error', title: '실내/좌식' },
      { color: 'success', title: '야외/입식' },
      { color: 'lightpink', title: '소규모' },
    ],
    title: '두 가지 진실과 한 가지 거짓말',
    titleEmoji: '🦘',
  },
];
