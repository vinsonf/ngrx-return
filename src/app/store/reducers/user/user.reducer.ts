import { Action, createReducer, on } from '@ngrx/store';
import { loadUsersSuccess } from '../../actions/user/user.actions';


export const userFeatureKey = 'user';

export interface State {
  users: []
}

export const initialState: State = {
  users: []
};


export const reducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, action) => {
    console.log(action)
    return action.data
  })

);

