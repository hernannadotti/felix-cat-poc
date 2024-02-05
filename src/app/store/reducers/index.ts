import { isDevMode } from '@angular/core';
import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { petsReducer } from './pets.reducer';

export interface State {
  store: any;

}

export const reducers: ActionReducerMap<State> = {
  store: petsReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
