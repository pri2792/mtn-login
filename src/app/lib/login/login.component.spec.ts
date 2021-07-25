import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AuthenticationService } from '../services';
import { reducers } from '../store/app.states';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authenticationServiceApiSpy =
    jasmine.createSpyObj<AuthenticationService>('AuthenticationService', [
      'login',
    ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(reducers, {}),
      ],
      providers: [
        {
          provide: AuthenticationService,
          useValue: authenticationServiceApiSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('Form should be invalid', () => {
    const controls = component.f;
    controls.email.setValue('sample@ibm.com');
    controls.password.setValue('ibm@');
    component.login();
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Display Both Username & Password Error Msg when both field is blank', () => {
    const controls = component.f;
    controls.email.setValue('');
    controls.password.setValue('');
    component.login();
    fixture.detectChanges();
​
    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector('.email-required');
    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('.password-required');
​
    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain('Email is required');
​
    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Password is required');
  });

  it('Should login with valid form', () => {
    const controls = component.f;
    controls.email.setValue('priya@ibm.com');
    controls.password.setValue('ibm@1234');
    component.login();
    expect(component.submitted).toEqual(true);
  });
});
