import { createSelector } from 'reselect';
import { IState } from './core.types';
import { MODULE_NAME } from './core.constants'


const selectState = (state: { [MODULE_NAME]: IState }) => state[MODULE_NAME];

export const getIsAuthed = createSelector(
  selectState,
  (state) => state.isAuthed
);

export const getIsAuthLoading = createSelector(
  selectState,
  (state) => state.isAuthLoading
);