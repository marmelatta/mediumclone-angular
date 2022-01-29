import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register.action";

@Component({
  selector: 'mc-register', // наименование компонента
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @ts-ignore
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: '',
      password: ''
    })
    console.log(this.form.valid)
  }

  onSubmit() {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value));
  }
}
