import { createReducer, on } from "@ngrx/store";
import { clearSelectedBreed, clearSelectedImage, saveCurrentPetImage, savePetList, selectBreed } from "../actions";

export const initialState: any = {
  breeds: [],
  selectedBreed: {},
  currentPetImage: {}
}

export const petsReducer = createReducer(
  initialState,

  on(savePetList, (state, {payload}) => ({
    ...state,
      breeds: payload.breeds
    })
  ),

  on(selectBreed, (state, {payload}) => ({
    ...state,
      selectedBreed: payload.selectedBreed
    })
  ),

  on(saveCurrentPetImage, (state, {payload}) => ({
    ...state,
      currentPetImage: payload.currentPetImage
    })
  ),

  on(clearSelectedBreed, (state) => ({
    ...state,
      selectedBreed: ''
    })
  ),

  on(clearSelectedImage, (state) => ({
    ...state,
      currentPetImage: ''
    })
  )
)
