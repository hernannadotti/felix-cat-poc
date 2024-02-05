import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, catchError, map, mergeMap, of } from "rxjs";
import { PetsService } from "../../services/pets.service";
import { getPetList, savePetList } from "../actions";
import { Injectable } from "@angular/core";

@Injectable()

export class PetsEffects {
  constructor(
    private actions$: Actions,
    private petsService: PetsService
  ) {}
  public loadUnitList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getPetList),
      mergeMap(() => {
        return this.petsService.getPetsList().pipe(
          map(breeds => savePetList({payload: {breeds}})),
          catchError(() => EMPTY)
        );
      })
    );
  });
}