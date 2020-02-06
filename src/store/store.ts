import { createStore, Store, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { saga as rootSaga, reducer as rootReducer, MODULE_NAME as CORE_MODULE_NAME} from '@/core';

type IComposer = any;
interface IExpandStore  {
  asyncReducers: {
    [key: string]: any
  };
  injectSaga: (key: string, saga: any) => void;
  injectReducer: (key: string, reducer: object) => void;

}

const staticReducers: any = {};

const  createSagaInjector = (runSaga: any, rootSaga: any) => {
  const injectedSagas = new Map();

  const isInjected = (key: string) => injectedSagas.has(key);

  const injectSaga = (key: string, saga: any) => {
      if (isInjected(key)) return;

      const task = runSaga(saga);

      injectedSagas.set(key, task);
  };

  injectSaga('root', rootSaga);

  return injectSaga;
}

export default (): Store & IExpandStore  => {
  const sagaMiddleware = createSagaMiddleware();

  const composer: IComposer = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;


  const store: Store & IExpandStore = createStore(createReducer(),  {},
  composer(applyMiddleware(sagaMiddleware))
  );
  store.asyncReducers = {}
  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);
  store.injectReducer = (key: string, asyncReducer: object) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  };
  
  return store
}

function createReducer(asyncReducers?: object) {
  return combineReducers({
    [CORE_MODULE_NAME]: rootReducer,
    ...staticReducers,
    ...asyncReducers
  })
}
