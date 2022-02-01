import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {BackendErrorsInteface} from "../../../shared/types/backendErrors.inteface";
import {select, Store} from "@ngrx/store";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {LoginRequestInterface} from "../../types/loginRequestInterface";
import {loginAction} from "../../store/actions/login.action";

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;
  // @ts-ignore
  isSubmitting$: Observable<boolean>;
  // @ts-ignore
  backendErrors$: Observable<BackendErrorsInteface | null>;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initialValues();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
    console.log(this.form.valid)
  }

  private initialValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit() {
    console.log(this.form.value)
    const request: LoginRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(loginAction({request}));
  }

}
