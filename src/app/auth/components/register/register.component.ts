import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register.action";
import {Observable} from "rxjs";
import {isSubmittingSelector, validationErrorsSelector} from "../../store/selectors";
import {RegisterRequestInterface} from "../../types/registerRequest.interface";
import {BackendErrorsInteface} from "../../../shared/types/backendErrors.inteface";

@Component({
  selector: 'mc-register', // наименование компонента
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
      username: ['', Validators.required],
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
    const request: RegisterRequestInterface = {
      user: this.form.value
    };
    this.store.dispatch(registerAction({request}));
  }
}
