import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ignoreElements } from 'rxjs/operators';
import { reducers } from '../store/app.states';

import { HomeComponent } from './home.component';
import * as fromReducer from '../store/reducers/auth.reducers';
import * as fromActions from '../store/actions/auth.actions';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        StoreModule.forRoot(reducers, {}),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout on click of logout button', () => {
    const { initialState } = fromReducer;
    component.logout();
    const action = new fromActions.Logout();
    const state = fromReducer.reducer(initialState, action);
    expect(state).toEqual(initialState);
  });
});
