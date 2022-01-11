import { AuthEffects } from "./auth/auth.effects";
import { PetsEffects } from "./pets/pets.effects";
import { CommentsEffects } from "./comments/comments.effects";

export const effects = [AuthEffects, PetsEffects, CommentsEffects];
