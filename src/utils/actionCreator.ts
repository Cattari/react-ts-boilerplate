import { createAction } from 'redux-act';
import identity from 'lodash/identity';

export const createAsyncAction = (type: string, payloadCreators?: CreatorFns, metaCreators?: CreatorFns): IActions => {
  const payload = payloadCreators || {};
  const meta = metaCreators || {};
  return {
    cancel: createAction(type + '::CANCEL', payload.cancel || identity, meta.cancel),
    failure: createAction(type + '::FAILURE', payload.failure || identity, meta.failure),
    request: createAction(type + '::REQUEST', payload.request || identity, meta.request),
    success: createAction(type + '::SUCCESS', payload.success || identity, meta.success),
    start: createAction(type + '::START', payload.start || identity, meta.start),
  };
};

type CreatorFns = null | { [key in keyof IActions]?: (...args: any[]) => any };

interface IActions {
  cancel: any;
  failure: any;
  request: any;
  success: any;
  start: any;
}

export default (prefix: string) => (type: string, payloadCreators?: CreatorFns, metaCreators?: CreatorFns) => {
  return createAsyncAction(`${prefix}:${type}`, payloadCreators, metaCreators);
};
