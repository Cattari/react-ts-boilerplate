import { actionCreator } from '@/utils';

import * as CONSTANTS from './auth.constants';

const action = actionCreator(CONSTANTS.MODULE_NAME);

export const login = action(CONSTANTS.LOGIN);
