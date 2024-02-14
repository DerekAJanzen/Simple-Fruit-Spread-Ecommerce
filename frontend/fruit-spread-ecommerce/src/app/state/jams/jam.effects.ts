import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { JamService } from '../../service/jam.service';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as JamActions from './jams.actions';




@Injectable()
export class JamEffects {
    constructor( private actions$: Actions, private jamService: JamService){}


    loadJams$ = createEffect(() => this.actions$.pipe(
        ofType('[Jam Page] Fetch Jams'),
        exhaustMap(() => this.jamService.getAllJams()
        .pipe(
            map((jams) => JamActions.fetchJamsSuccess({jams})),
            catchError(() => of(JamActions.fetchJamsFailure()))
        )
    )))
}