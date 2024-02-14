import { Jam } from '../../model/jam.model';
import {Action, createReducer, on} from '@ngrx/store';
import * as JamPageActions from './jams.actions';

type Status = 'success' | 'error' | null;

export interface JamState{
    jams: Jam[],
    justJams: Jam[],
    justPreserves: Jam[],
    status: Status,
}

export const initialJamState: JamState = {
    jams: [],
    justJams: [],
    justPreserves: [],
    status: null,
}

export const jamReducer = createReducer(
    initialJamState,
    on(JamPageActions.fetchJamsSuccess, (state, {jams}) => ({...state, jams: jams, justJams: jams.filter(ele => ele.type === "Jam"), justPreserves: jams.filter(ele => ele.type === "Preserves"), status: "success" as Status})), 
    on(JamPageActions.fetchJamsFailure, state => ({...state, jams:[], status: 'error' as Status}),
    ))

