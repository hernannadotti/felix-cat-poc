import { createAction, props } from "@ngrx/store";

export const getPetList = createAction('[PetsList] Get Pet List');

export const savePetList = createAction('[PetsList] Save Pet List', props<{payload: any}>());