import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { PetsState } from "./pets.state";

export const mapPetsState = (state: AppState) => state.pets;

export const mapError = (state: PetsState) => state.error;
export const getPetsError = createSelector(mapPetsState, mapError);

export const mapIsLoading = (state: PetsState) => state.isLoading;
export const getPetsIsLoading = createSelector(mapPetsState, mapIsLoading);

export const mapPetsList = (state: PetsState) => state.petsList;
export const getPetsList = createSelector(mapPetsState, mapPetsList);
