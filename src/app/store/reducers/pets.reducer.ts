import { State, createReducer, on } from "@ngrx/store";
import { savePetList } from "../actions";

export const initialState: any = {
  store: []
}

export const petsReducer = createReducer(
  initialState,
  on(savePetList, (state, {payload}) => ({
      breeds: payload.breeds
    })
    )
)