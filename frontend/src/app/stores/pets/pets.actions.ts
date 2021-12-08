import { createAction, union, props } from "@ngrx/store";
import { PetItem } from "src/app/models/pets";
import { type } from "src/app/utils/functions";

export const petsActionTypes = {
  petsRequested: type("[Pets] -Pets requested-"),
  petsCompleted: type("[Pets] -Pets completed-"),
  error: type("[Pets] -Pets error-"),
};

export const petsRequested = createAction(
  petsActionTypes.petsRequested,
  props<any>()
);
export const petsCompleted = createAction(
  petsActionTypes.petsCompleted,
  props<{ petsList: PetItem[] }>()
);

export const petsError = createAction(
  petsActionTypes.error,
  props<{ error: any }>()
);

const all = union({
  petsRequested,
  petsCompleted,
  petsError,
});

export type PetsActionsTypes = typeof all;
