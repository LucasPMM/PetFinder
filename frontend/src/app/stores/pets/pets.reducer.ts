import { createReducer, on, Action } from "@ngrx/store";
import { petsEmptyState, PetsState } from "./pets.state";
import * as PetsActions from "./pets.actions";
import { clone } from "ramda";

const reducer = createReducer(
  petsEmptyState,
  on(PetsActions.petsRequested, (state) => ({ ...state, isLoading: true })),
  on(PetsActions.petsCompleted, (state, { petsList }) => {
    const list = clone(petsList || []);
    return {
      ...state,
      petsList: list?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      ),
      isLoading: false,
    };
  }),
  on(PetsActions.createPetRequested, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PetsActions.createPetCompleted, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(PetsActions.deletePetRequested, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PetsActions.deletePetCompleted, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(PetsActions.updatePetRequested, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(PetsActions.updatePetCompleted, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(PetsActions.petsError, (state) => ({ ...state, isLoading: false }))
);

export function petsReducer(state: PetsState, action: Action) {
  return reducer(state, action);
}
