import { createReducer } from 'redux-act';
import produce from 'immer';


import * as actions from './core.actions';
import { IState } from './core.types';

const initialState: IState = {
  isAuthed: false,
  isAuthLoading: true,
};

export default (state, action) => {
  switch(action.type) {
    case: 
    default:
      
  }
}

export default createReducer(
  {
    [actions.checkAuth.success]: (state) =>
      produce(state, nextState => {
        nextState.isAuthed = false;
      }),
    [actions.checkAuth.failure]: (state) =>
      produce(state, nextState => {
        nextState.isAuthed = false;
      }),
    [actions.setAuthLoading.success]: (state) =>
    produce(state, nextState => {
      nextState.isAuthLoading = true;
    }),
    [actions.setAuthLoading.failure]: (state) =>
    produce(state, nextState => {
      nextState.isAuthLoading = false;
    }),
    
  },
  initialState
);
