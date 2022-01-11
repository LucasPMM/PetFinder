import { createAction, union, props } from "@ngrx/store";
import { type } from "src/app/utils/functions";

export const commentsActionTypes = {
  createCommentRequested: type("[Comments] -Create Comment requested-"),
  createCommentCompleted: type("[Comments] -Create Comment completed-"),
  error: type("[Comments] -error-"),
};

export const createCommentRequested = createAction(
  commentsActionTypes.createCommentRequested,
  props<{ payload: any }>()
);
export const createCommentCompleted = createAction(
  commentsActionTypes.createCommentCompleted,
  props<any>()
);

export const commentsError = createAction(
  commentsActionTypes.error,
  props<{ error: any }>()
);

const all = union({
  createCommentRequested,
  createCommentCompleted,
  commentsError,
});

export type CommentsActionsTypes = typeof all;
