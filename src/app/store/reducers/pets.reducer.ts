import { createReducer, on } from "@ngrx/store";
import { savePetList, selectBreed } from "../actions";

export const initialState: any = {
  breeds: [],
  selectedBreed: {}
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
  )
)
