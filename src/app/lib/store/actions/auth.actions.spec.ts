import * as Actions from './auth.actions';

describe('Store > Login > LoginActions', () => {
  it('Should perform login action', () => {
    const payload = { email: 'priya@ibm.com', password: 'ibm@1234' };
    const action = new Actions.Login(payload);
    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGIN,
      payload
    });
  });

  it('Should perform LoginSuccess Action', () => {
    const payload = { email: 'priya@ibm.com', password: 'ibm@1234' };
    const action = new Actions.LoginSuccess(payload);

    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGIN_SUCCESS,
      payload
    });
  });

  it('Should perform LoginFailure Action', () => {
    const payload = { email: 'priya@ibm.com', password: 'ibm@12345' };
    const action = new Actions.LoginFailure(payload);

    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGIN_ERROR,
      payload
    });
  });

  it('Should perform Logout Action', () => {
    const action = new Actions.Logout();

    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGOUT
    });
  });

});