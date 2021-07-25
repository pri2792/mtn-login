import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import * as Actions from '../store/actions/auth.actions';

describe('AuthService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if valid user', () => {
    const payload: any = {
      email: 'priya@ibm.com',
      password: 'ibm@1234',
    };
    const authenticate = service.login(payload);
    authenticate.subscribe((response) => {
      expect(response).toEqual(payload);
    });
    const action = new Actions.LoginSuccess(payload);

    expect({ ...action }).toEqual({
      type: Actions.AuthActionTypes.LOGIN_SUCCESS,
      payload,
    });
  });
});
