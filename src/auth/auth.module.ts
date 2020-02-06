import store from '@/store';

import SignInContainer from './containers/SignIn.container';

import reducer from './auth.reducer';
import saga from './auth.sagas';
import { MODULE_NAME } from './auth.constants';


store.injectReducer(MODULE_NAME, reducer);
store.injectSaga(MODULE_NAME, saga);

export default SignInContainer;