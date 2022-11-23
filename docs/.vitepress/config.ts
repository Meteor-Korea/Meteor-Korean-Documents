import { defineConfig, UserConfig } from 'vitepress'

const head: UserConfig['head'] = [
  ['link', { rel: 'icon', href: `/logo.png` }],
]

const config = defineConfig({
  markdown: {
    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },
  },

  lang: 'ko',
  title: 'Meteor.js 한글',
  description: '풀스택 node.js 프레임워크 Meteor.js로 비교할 수 없는 빠르게 훌륭한 앱 구축하기',
  head,
  // serviceWorker: true,

  lastUpdated: false,

  themeConfig: {
    logo: '/logo.png',

    editLink: {
      pattern: 'https://github.com/niceplugin/Meteor-KO/edit/main-ko/docs/:path',
      text: '이 페이지 편집 제안하기'
    },

    lastUpdatedText: '마지막 수정일',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/niceplugin/Meteor-KO' },
      { icon: 'slack', link: 'https://join.slack.com/t/meteor-community/shared_invite/enQtODA0NTU2Nzk5MTA3LWY5NGMxMWRjZDgzYWMyMTEyYTQ3MTcwZmU2YjM5MTY3MjJkZjQ0NWRjOGZlYmIxZjFlYTA5Mjg4OTk3ODRiOTc' }
    ],

    // carbonAds: {
    //   carbon: 'CEBICK3I',
    //   custom: 'CEBICK3M',
    //   placement: 'routervuejsorg',
    // },

    // algolia: {
    //   appId: 'BTNTW3I1XP',
    //   apiKey: '771d10c8c5cc48f7922f15048b4d931c',
    //   indexName: 'next_router_vuejs',
    //   // searchParameters: {
    //   //   facetFilters: ['tags:guide,api,migration'],
    //   // },
    // },

    nav: [
      {
        text: '가이드',
        items: [
          {
            text: 'Meteor',
            link: '/meteor/guide/summary/introduction.md',
          },
          {
            text: 'Blaze',
            link: '/blaze/guide/summary/introduction.md',
          },
          // {
          //   text: 'Router',
          //   link: '/router/guide/summary/introduction.md',
          // },
        ]
      },
      {
        text: 'API',
        items: [
          {
            text: 'Meteor',
            link: '/meteor/api/core.md',
          },
          // {
          //   text: 'Blaze',
          //   link: '/blaze/api/index.md',
          // },
          // {
          //   text: 'Router',
          //   link: '/router/api/index.md',
          // },
        ]
      },
      // {
      //   text: 'API (모듈별)',
      //   items: [
      //     {
      //       text: 'pinia',
      //       link: '/api/modules/pinia/introduction.md'
      //     },
      //     {
      //       text: '@pinia/nuxt',
      //       link: '/api/modules/pinia_nuxt/introduction.md'
      //     },
      //   ],
      // },
      {
        text: '변경사항',
        items: [
          {
            text: 'Meteor',
            link: 'https://docs.meteor.com/changelog',
          },
          {
            text: 'Blaze',
            link: 'https://www.blazejs.org/changelog',
          },
          {
            text: 'Flow Router Extra',
            link: 'https://github.com/veliovgroup/flow-router/releases',
          },
        ]
      },
    ],

    sidebar: {
      '/meteor/guide/': [
        {
          text: 'Meteor 가이드',
          items: [
            {
              text: '시작하기',
              link: '/meteor/guide/summary/introduction.md',
            },
            {
              text: '프로젝트 구조',
              link: '/meteor/guide/summary/structure.md',
            },
          ],
        },
        // {
        //   text: '데이터',
        //   items: [
        //     {
        //       text: '컬렉션과 스키마',
        //       link: '/meteor/guide/data/collections-and-schemas.md',
        //     },
        //     {
        //       text: '퍼블리케이션과 섭스크립션',
        //       link: '/meteor/guide/data/publications-and-subscriptions.md',
        //     },
        //     {
        //       text: '메서드',
        //       link: '/meteor/guide/data/methods.md',
        //     },
        //     {
        //       text: '유저와 계정',
        //       link: '/meteor/guide/data/users-and-accounts.md',
        //     },
        //   ],
        // },
      ],
      '/blaze/guide/': [
        {
          text: 'Blaze',
          items: [
            {
              text: '소개',
              link: '/blaze/guide/summary/introduction.md',
            },
          ],
        },
        {
          text: 'Blaze 튜토리얼',
          items: [
            {
              text: '1. 템플릿 시작하기',
              link: '/blaze/guide/summary/spacebars-templates.md',
            },
            {
              text: '2. 헬퍼 사용하기',
              link: '/blaze/guide/summary/helpers.md',
            },
            {
              text: '3. 이벤트 사용하기',
              link: '/blaze/guide/summary/events.md',
            },
            {
              text: '4. 템플릿에 데이터 전달하기',
              link: '/blaze/guide/summary/blockArguments.md',
            },
            {
              text: '5. 상태 관리와 전역 헬퍼',
              link: '/blaze/guide/summary/state-globalHelpers.md',
            },
            {
              text: '6. 조건문',
              link: '/blaze/guide/summary/if-unless.md',
            },
            {
              text: '7. 반복문',
              link: '/blaze/guide/summary/each.md',
            },
          ],
        },
        // {
        //   text: '데이터',
        //   items: [
        //     {
        //       text: '컬렉션과 스키마',
        //       link: '/blaze/guide/data/collections-and-schemas.md',
        //     },
        //     {
        //       text: '퍼블리케이션과 섭스크립션',
        //       link: '/blaze/guide/data/publications-and-subscriptions.md',
        //     },
        //     {
        //       text: '메서드',
        //       link: '/blaze/guide/data/methods.md',
        //     },
        //     {
        //       text: '유저와 계정',
        //       link: '/blaze/guide/data/users-and-accounts.md',
        //     },
        //   ],
        // },
      ],

      '/meteor/api/': [
        {
          text: 'Meteor 기본 API',
          items: [
            {
              text: '코어',
              link: '/meteor/api/core.md'
            },
            {
              text: '서버 커넥션',
              link: '/meteor/api/server-connections.md'
            },
            // {
            //   text: '콜렉션',
            //   link: '/meteor/api/collections.md'
            // },
            // {
            //   text: '퍼블리쉬와 섭스크라입',
            //   link: '/meteor/api/publish-and-subscribe.md'
            // },
          ]
        },
      ],
    },

    footer: {
      message: 'Translated by niceplugin@gmail.com',
      copyright: 'MIT Licensed | Copyright © 2022-present niceplugin@gmail.com'
    },
  },
})

export default config
