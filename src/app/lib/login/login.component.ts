import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models';
import { Login } from '../store/actions/auth.actions';
import { IAppState, selectAuthState } from '../store/app.states';
import { IState } from '../store/reducers/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  user: User = new User();
  loginForm: FormGroup;
  state: Observable<any>;
  error: any;
  constructor(private fb: FormBuilder, private store: Store<IAppState>) {
    this.state = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.state.subscribe((s: IState) => {
      this.error = s.error;
    });
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.store.dispatch(new Login(this.loginForm.value));
  }
}
