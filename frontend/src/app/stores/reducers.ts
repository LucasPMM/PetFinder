import { ActionReducerMap, createSelector } from "@ngrx/store";

// States:
import { AuthState } from "./auth/auth.state";
import { PetsState } from "./pets/pets.state";

// Reducers:
import { authReducer } from "./auth/auth.reducer";
import { petsReducer } from "./pets/pets.reducer";

export interface AppState {
  auth: AuthState;
  pets: PetsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  pets: petsReducer,
};

export const mapApplicationState = (state: AppState) => state;
export const getApplicationState = createSelector(
  mapApplicationState,
  (state: AppState) => state
);
