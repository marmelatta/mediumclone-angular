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

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
]

@NgModule({
  declarations: [ // регистрация компонентов
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorsMessagesModule,
  ],
  providers: [AuthService,
    PersistanceService],
})
export class AuthModule { }
