import { createSelector } from '@ngrx/store';
import { PetsState } from '../models/pets.state';
import { AppState } from '../app.state';

export interface IBreed {
  id: number;
  name: string;
}


export const selectAllBreeds = (state: AppState) => state.breeds;

export const selectBreeds = createSelector(
  selectAllBreeds,
  (state: PetsState) => state.breeds
);