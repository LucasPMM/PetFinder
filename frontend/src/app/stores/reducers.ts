import { ActionReducerMap, createSelector } from "@ngrx/store";

// States:
import { AuthState } from "./auth/auth.state";
import { PetsState } from "./pets/pets.state";
import { CommentsState } from "./comments/comments.state";

// Reducers:
import { authReducer } from "./auth/auth.reducer";
import { petsReducer } from "./pets/pets.reducer";
import { commentsReducer } from "./comments/comments.reducer";

export interface AppState {
  auth: AuthState;
  pets: PetsState;
  comments: CommentsState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  pets: petsReducer,
  comments: commentsReducer,
};

export const mapApplicationState = (state: AppState) => state;
export const getApplicationState = createSelector(
  mapApplicationState,
  (state: AppState) => state
);
