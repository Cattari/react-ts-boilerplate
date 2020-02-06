import { createReducer } from 'redux-act';
import produce from 'immer';

const initialState = {
  isAuthed: false
};

export default createReducer(
  {
    'test ': (state, payload: boolean) =>
      produce(state, nextState => {
        console.log('text');
        // nextState.isLoading = payload;
      }),
   
    
  },
  initialState
);
