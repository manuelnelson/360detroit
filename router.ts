const mainTitle = '360 Detroit, Inc.'


export const routes : IRoute =  
  {
    home:  {
      path: '/',
      name: 'home',
      meta: {
        title: `Home - ${mainTitle}`
      }
    },
    about:  {
      path: '/about',
      name: 'about',
      meta: {
        title: `About Us - ${mainTitle}`
      }
    },
    virginiaPark: {
      path: '/virginia-park-community',
      name: 'virginiaPark',
      meta: {
        title: `Virginia Park Community - ${mainTitle}`
      }
    },
    getInvolved: {
      path: '/get-involved',
      name: 'getInvolved',
      meta: {
        title: `Get Involved - ${mainTitle}`
      }
    },
    community: {
      path: '/in-the-community',
      name: 'community',
      meta: {
        title: `Community - ${mainTitle}`
      }
    },
    contact: {
      path: '/contact',
      name: 'contact',
      meta: {
        title: `Contact - ${mainTitle}`
      }
    },
    arthouse: {
      path: '/impact/art-house',
      name: 'arthouse',
      meta: {
        title: `Art House - ${mainTitle}`
      }
    },
    euclid1151: {
      path: '/impact/euclid-1151',
      name: 'euclid1151',
      meta: {
        title: `Euclid 1151 - ${mainTitle}`
      }
    },
    euclid1167: {
      path: '/impact/euclid-1167',
      name: 'euclid1167',
      meta: {
        title: `Euclid 1167 - ${mainTitle}`
      }
    },
    euclid1189: {
      path: '/impact/euclid-1189',
      name: 'euclid1189',
      meta: {
        title: `Euclid 1189 - ${mainTitle}`
      }
    },
    hollandMaze: {
      path: '/impact/holland',
      name: 'holland',
      meta: {
        title: `Holland Maze - ${mainTitle}`
      }
    },
    blockParty: {
      path: '/impact/block-party',
      name: 'blockparty',
      meta: {
        title: `Community Block Party - ${mainTitle}`
      }
    },
    cleanUp: {
      path: '/impact/clean-up',
      name: 'cleanUp',
      meta: {
        title: `Community Clean Up - ${mainTitle}`
      }
    },
    whatshappening: {
      path: '/whats-happening',
      name: 'whatsHappening',
      meta: {
        title: `Whats Happening - ${mainTitle}`
      }
    },
    engagementMeetings: {
      path: '/impact/engagement-meetings',
      name: 'engagementMeetings',
      meta: {
        title: `Community Engagement Meetings - ${mainTitle}`
      }
    },
    park360: {
      path: '/impact/360-park',
      name: '360park',
      meta: {
        title: `360 Park - ${mainTitle}`
      }
    },
  };

class RouteRecordRaw {
  path!: string
  name!: string
  meta!: {
    title: string
  }

}


export interface IRoute {
  home: RouteRecordRaw,
  euclid1151: RouteRecordRaw,
  community: RouteRecordRaw,
  euclid1167: RouteRecordRaw,
  euclid1189: RouteRecordRaw,
  contact: RouteRecordRaw,
  getInvolved: RouteRecordRaw,
  whatshappening: RouteRecordRaw,
  virginiaPark: RouteRecordRaw,
  park360: RouteRecordRaw,
  hollandMaze: RouteRecordRaw,
  engagementMeetings: RouteRecordRaw,
  cleanUp: RouteRecordRaw,
  blockParty: RouteRecordRaw,
  arthouse: RouteRecordRaw,
  about: RouteRecordRaw
}