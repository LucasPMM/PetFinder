import { createReducer, on, Action } from "@ngrx/store";
import { commentsEmptyState, CommentsState } from "./comments.state";
import * as CommentsActions from "./comments.actions";

const reducer = createReducer(
  commentsEmptyState,
  on(CommentsActions.createCommentRequested, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(CommentsActions.createCommentCompleted, (state) => ({
    ...state,
    isLoading: false,
  })),
  on(CommentsActions.commentsError, (state) => ({ ...state, isLoading: false }))
);

export function commentsReducer(state: CommentsState, action: Action) {
  return reducer(state, action);
}
