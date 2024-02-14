import {createAction, props} from '@ngrx/store';
import { Jam } from '../../model/jam.model';

export const fetchJams = createAction('[Jam Page] Fetch Jams');
export const fetchJamsSuccess = createAction('[Jam Page] Fetch Jams Success', props<{jams: Jam[]}>());
export const fetchJamsFailure = createAction('[Jam Page] Fetch Jams Failure')