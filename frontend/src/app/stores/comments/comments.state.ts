export interface CommentsState {
  isLoading: boolean;
  error: any;
}

export const commentsEmptyState: CommentsState = {
  isLoading: false,
  error: null,
};
