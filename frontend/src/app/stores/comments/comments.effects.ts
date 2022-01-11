import { map, switchMap, catchError, tap } from "rxjs/operators";
import { UtilsService } from "./../../services/utils/utils.service";
import { from, of } from "rxjs";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as CommentsActions from "./comments.actions";
import { Injectable } from "@angular/core";
import { CommentsService } from "src/app/services/comments/comments.service";

@Injectable()
export class CommentsEffects {
  constructor(
    private actions$: Actions<CommentsActions.CommentsActionsTypes>,
    private utilsService: UtilsService,
    private commentsService: CommentsService
  ) {}

  createCommentRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.commentsActionTypes.createCommentRequested),
      switchMap((action) => {
        return from(this.commentsService.createComment(action?.payload)).pipe(
          map(() => CommentsActions.createCommentCompleted(null)),
          catchError((error) => of(CommentsActions.commentsError({ error })))
        );
      })
    )
  );

  createCommentCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CommentsActions.commentsActionTypes.createCommentCompleted),
        tap(() => {})
      ),
    { dispatch: false }
  );

  commentsError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CommentsActions.commentsActionTypes.error),
        tap((action) => this.utilsService.handleError(action.error))
      ),
    { dispatch: false }
  );
}
