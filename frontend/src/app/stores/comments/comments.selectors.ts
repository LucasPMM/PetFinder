import { AppState } from "../reducers";
import { createSelector } from "@ngrx/store";
import { CommentsState } from "./comments.state";

export const mapCommentsState = (state: AppState) => state.comments;

export const mapError = (state: CommentsState) => state.error;
export const getPetsError = createSelector(mapCommentsState, mapError);
