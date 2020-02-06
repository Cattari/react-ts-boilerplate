import * as Pages from '@/pages';

import { MASKS, ROLES, PATHS } from '@/constants';

const LOGIN_TITLE = 'Login';


export default [
  {
    component: Pages.Auth,
    title: LOGIN_TITLE,
    name: LOGIN_TITLE,
    path: PATHS.AUTH,
    mask: MASKS.AUTH,
    exact: false,
    isPrivate: false,
    allowedRoles: [ROLES.GUEST],
  },
 
];
