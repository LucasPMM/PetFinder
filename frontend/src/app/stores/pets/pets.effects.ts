import { map, switchMap, catchError, tap } from "rxjs/operators";
import { UtilsService } from "./../../services/utils/utils.service";
import { from, of } from "rxjs";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import * as PetsActions from "./pets.actions";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { PetsService } from "src/app/services/pets/pets.service";
import { ToasterService } from "angular2-toaster";

@Injectable()
export class PetsEffects {
  constructor(
    private actions$: Actions<PetsActions.PetsActionsTypes>,
    private utilsService: UtilsService,
    private router: Router,
    private toasterService: ToasterService,
    private petsService: PetsService
  ) {}

  petsListRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.petsActionTypes.petsRequested),
      switchMap(() => {
        return from(this.petsService.getPets()).pipe(
          map((petsList) => PetsActions.petsCompleted({ petsList })),
          catchError((error) => of(PetsActions.petsError({ error })))
        );
      })
    )
  );

  petsListCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PetsActions.petsActionTypes.petsCompleted),
        tap(() => {
          this.router.navigate(["/dashboard"]);
        })
      ),
    { dispatch: false }
  );

  createRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.petsActionTypes.createPetRequested),
      switchMap((action) => {
        return from(this.petsService.createPet(action.payload)).pipe(
          map(() => PetsActions.createPetCompleted({})),
          catchError((error) => of(PetsActions.petsError({ error })))
        );
      })
    )
  );

  createCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PetsActions.petsActionTypes.createPetCompleted),
        tap(() => {
          this.router.navigate(["/dashboard"]);
          this.toasterService.pop("success", "Pet criado!");
        })
      ),
    { dispatch: false }
  );

  deleteRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.petsActionTypes.deletePetRequested),
      switchMap((action) => {
        return from(this.petsService.deletePet(action?.id)).pipe(
          map(() => PetsActions.deletePetCompleted({})),
          catchError((error) => of(PetsActions.petsError({ error })))
        );
      })
    )
  );

  deleteCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PetsActions.petsActionTypes.deletePetCompleted),
        tap(() => {
          this.router.navigate(["/dashboard"]);
          this.toasterService.pop("success", "Pet deletado!");
        })
      ),
    { dispatch: false }
  );

  updateRequested$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetsActions.petsActionTypes.updatePetRequested),
      switchMap((action) => {
        return from(
          this.petsService.updatePet(action?.id, action?.payload)
        ).pipe(
          map(() => PetsActions.updatePetCompleted({})),
          catchError((error) => of(PetsActions.petsError({ error })))
        );
      })
    )
  );

  updateCompleted$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PetsActions.petsActionTypes.updatePetCompleted),
        tap(() => {
          this.toasterService.pop("success", "Pet atualizado!");
        })
      ),
    { dispatch: false }
  );

  petsError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PetsActions.petsActionTypes.error),
        tap((action) => this.utilsService.handleError(action.error))
      ),
    { dispatch: false }
  );
}
