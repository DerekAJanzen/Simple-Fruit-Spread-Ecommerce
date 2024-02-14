import { JamState } from './jams.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectJams = createFeatureSelector<JamState>('jams');

export const selectAllJams = createSelector(selectJams, (jams) =>{
    return jams.jams;
})

export const selectJustJams = createSelector(selectJams, (jams) => {
    return jams.justJams;
})

export const selectJustPreserves = createSelector(selectJams, (jams) => {
    return jams.justPreserves;
})
