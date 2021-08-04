import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthenticationService } from '../../services';
import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
} from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  Login: Observable<any> = createEffect(() => {
    return this.actions.pipe(
      ofType(AuthActionTypes.LOGIN),
      map((action: Login) => action.payload),
      switchMap((payload) => {
        return this.authService.login(payload).pipe(
          map((user: any) => {
            return new LoginSuccess({
              token: user.token,
              email: payload.email,
            });
          }),
          catchError((error) => {
            return of(new LoginFailure({ error }));
          })
        );
      })
    );
  });
  LoginSuccess: Observable<any> = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActionTypes.LOGIN_SUCCESS),
        tap((user: { payload: { email: string, token: string } }) => {
          localStorage.setItem('token', JSON.stringify(user.payload.token));
          this.router.navigate(['home']);
        })
      );
    },
    { dispatch: false }
  );

  LogInFailure: Observable<any> = createEffect(
    () => {
      return this.actions.pipe(ofType(AuthActionTypes.LOGIN_ERROR));
    },
    { dispatch: false }
  );

  LogOut: Observable<any> = createEffect(
    () => {
      return this.actions.pipe(
        ofType(AuthActionTypes.LOGOUT),
        tap(() => {
          localStorage.removeItem('token');
          this.router.navigate(['login']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions: Actions,
    private authService: AuthenticationService,
    private router: Router
  ) { }
}
