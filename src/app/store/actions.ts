import { createAction, props } from "@ngrx/store";

export const getPetList = createAction('[BreedList] Get Pet List');

export const savePetList = createAction('[BreedList] Save Pet List', props<{payload: any}>());

export const selectBreed = createAction('[BreedList] Select Pet from List', props<{payload: any}>());
