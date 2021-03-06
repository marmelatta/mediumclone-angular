import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";

import { RegisterComponent } from './components/register/register.component';
import {StoreModule} from "@ngrx/store";
import {reducers} from "./store/reducers";
import {AuthService} from "./services/auth.service";
import {EffectsModule} from "@ngrx/effects";
import {RegisterEffect} from "./store/effects/register.effect";
import {BackendErrorsMessagesModule} from "../shared/modules/backend-errors-messages/backend-errors-messages.module";
import {PersistanceService} from "../shared/services/persistance.service";
import {LoginEffect} from "./store/effects/login.effect";
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
]

@NgModule({
  declarations: [ // регистрация компонентов
    RegisterComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorsMessagesModule,
  ],
  providers: [AuthService,
    PersistanceService],
})
export class AuthModule { }
