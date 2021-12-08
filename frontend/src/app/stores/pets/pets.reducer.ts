import { createReducer, on, Action } from "@ngrx/store";
import { petsEmptyState, PetsState } from "./pets.state";
import * as PetsActions from "./pets.actions";

const reducer = createReducer(
  petsEmptyState,
  on(PetsActions.petsRequested, (state) => ({ ...state, isLoading: true })),
  on(PetsActions.petsCompleted, (state, { petsList }) => ({
    ...state,
    petsList,
    isLoading: false,
  })),
  on(PetsActions.petsError, (state) => ({ ...state, isLoading: false }))
);

export function petsReducer(state: PetsState, action: Action) {
  return reducer(state, action);
}
