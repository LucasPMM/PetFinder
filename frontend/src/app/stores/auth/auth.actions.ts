import { createAction, union, props } from "@ngrx/store";
import { Credentials, User } from "src/app/models/auth";
import { type } from "src/app/utils/functions";

export const authActionTypes = {
  loginRequested: type("[Auth] -Auth login requested-"),
  loginCompleted: type("[Auth] -Auth login completed-"),
  logout: type("[Auth] -Auth logout-"),
  error: type("[Auth] -Auth error-"),
};

export const loginRequested = createAction(
  authActionTypes.loginRequested,
  props<{ credential: Credentials }>()
);
export const loginCompleted = createAction(
  authActionTypes.loginCompleted,
  props<{ user: User }>()
);
export const logout = createAction(authActionTypes.logout, props<any>());
export const authError = createAction(
  authActionTypes.error,
  props<{ error: any }>()
);

const all = union({
  loginRequested,
  loginCompleted,
  logout,
  authError,
});

export type AuthActionsTypes = typeof all;
