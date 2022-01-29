import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import {RouterModule, Routes} from "@angular/router";

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
    RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
