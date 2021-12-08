import { PetItem } from "src/app/models/pets";

export interface PetsState {
  petsList: PetItem[];
  isLoading: boolean;
  error: any;
}

export const petsEmptyState: PetsState = {
  petsList: null,
  isLoading: false,
  error: null,
};
