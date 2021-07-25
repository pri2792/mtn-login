import { createFeatureSelector } from '@ngrx/store';
import { IState, reducer } from './reducers/auth.reducers';

export interface IAppState {
  auth: IState;
}

export const reducers = {
  auth: reducer,
};

export const selectAuthState = createFeatureSelector<IAppState>('auth');
