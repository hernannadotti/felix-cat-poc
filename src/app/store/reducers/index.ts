import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { petsReducer } from './pets.reducer';

export interface State {
  breeds: any[];
}

export const reducers: ActionReducerMap<State> = {
  breeds: petsReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
