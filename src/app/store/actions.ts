import { createAction, props } from "@ngrx/store";

export const getPetList = createAction('[BreedList] Get Pet List');

export const savePetList = createAction('[BreedList] Save Pet List', props<{payload: any}>());

export const selectBreed = createAction('[BreedList] Select Pet from List', props<{payload: any}>());

export const getPetImage = createAction('[BreedList] Get Pet Image', props<{payload: any}>());

export const saveCurrentPetImage = createAction('[BreedList] Save Current Pet Image', props<{payload: any}>());

export const clearSelectedBreed = createAction('[BreedList] Clear Selected Breed');

export const clearSelectedImage = createAction('[BreedList] Clear Selected Image');
