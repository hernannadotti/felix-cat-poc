import { createSelector } from '@ngrx/store';
import { PetsState } from '../models/pets.state';
import { AppState } from '../app.state';

export interface IBreed {
  id: number;
  name: string;
}


export const selectAllBreeds = (state: AppState) => state.store.breeds;
export const selectedBreed = (state: AppState) => state.store.selectedBreed;
export const currentPetImage = (state: AppState) => state.store.currentPetImage;

export const selectBreeds = createSelector(
  selectAllBreeds,
  (state: PetsState) => state
);

export const selectedCurrentBreed = createSelector(
  selectedBreed,
  (state: PetsState) => state
);

export const currentImagePet = createSelector(
  currentPetImage,
  (state: PetsState) => state
);
