import * as fromReducer from './auth.reducers';
import * as fromActions from '../actions/auth.actions';

describe('Store > Reducer', () => {

  it('Should return the default state', () => {
    const { initialState } = fromReducer;
    const state = fromReducer.reducer(undefined, { type: null });

    expect(state).toBe(initialState);
  });

  it('Should return the LOGIN_SUCCESS state', () => {
    const { initialState } = fromReducer;
    const payload: any = {
      email: 'priya@ibm.com',
      password: 'ibm@1234'
    };
    const action = new fromActions.LoginSuccess(payload);
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({
        ...initialState,
        isAuthenticated: true,
        user: {
          email: action.payload.email,
          password: action.payload.password,
        },
        error: null,
      });
  });

  it('Should return the LOGIN_ERROR state', () => {
    const { initialState } = fromReducer;
    const payload: any = {
      email: 'priya@ibm.com',
      password: 'ibm@12345'
    };
    const action = new fromActions.LoginFailure(payload);
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual({...initialState, error: 'Invalid User/Password'});
  });

  it('Should return the LOGOUT state', () => {
    const { initialState } = fromReducer;
    const action = new fromActions.Logout();
    const state = fromReducer.reducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});