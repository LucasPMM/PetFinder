import { createAction, union, props } from "@ngrx/store";
import { PetItem } from "src/app/models/pets";
import { type } from "src/app/utils/functions";

export const petsActionTypes = {
  petsRequested: type("[Pets] -Pets requested-"),
  petsCompleted: type("[Pets] -Pets completed-"),
  createPetRequested: type("[Pets] -CreatePet requested-"),
  createPetCompleted: type("[Pets] -CreatePet completed-"),
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

export const createPetRequested = createAction(
  petsActionTypes.createPetRequested,
  props<{ payload: any }>()
);
export const createPetCompleted = createAction(
  petsActionTypes.createPetCompleted,
  props<any>()
);

export const petsError = createAction(
  petsActionTypes.error,
  props<{ error: any }>()
);

const all = union({
  petsRequested,
  petsCompleted,
  createPetRequested,
  createPetCompleted,
  petsError,
});

export type PetsActionsTypes = typeof all;
