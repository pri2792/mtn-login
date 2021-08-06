import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { reducers } from '../app.states';
import { AuthEffects } from './auth.effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import * as fromActions from '../actions/auth.actions';
import { AuthenticationService } from '../../services/authentication.service';
import * as fromReducer from '../reducers/auth.reducers';
import { NgZone } from '@angular/core';

describe('Store > AuthEffects', () => {
  const actions$: Observable<Action> = new Observable<Action>();

  let effects: AuthEffects;
  let authenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers, {}),
        EffectsModule.forRoot([AuthEffects]),
      ],
      providers: [
        AuthEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        {
          provide: AuthenticationService,
          useValue: jasmine.createSpyObj('authenticationservice', ['login']),
        },
      ],
    });
    effects = TestBed.inject<AuthEffects>(AuthEffects);
    authenticationService = TestBed.inject<AuthenticationService>(
      AuthenticationService
    );
  }));

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  // it('Should dispatch logout action', async(() => {
  //   const ngZone = TestBed.inject(NgZone);
  //   ngZone.run(() => {
  //     const { initialState } = fromReducer;
  //     const action = new fromActions.Logout();
  //     fromReducer.reducer(initialState, action);
  //     actions$ = of({ type: fromActions.AuthActionTypes.LOGOUT });
  //     effects.LogOut.subscribe(action => {
  //       expect(action.type).toBe(fromActions.AuthActionTypes.LOGOUT);
  //     });
  //   });
  // }));
});
