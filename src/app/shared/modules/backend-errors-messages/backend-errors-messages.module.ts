import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './components/backend-error-messages/backend-error-messages.component';



@NgModule({
  declarations: [
    BackendErrorMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BackendErrorMessagesComponent] //нужно чтобы использовать компонент за пределами этого модуля
})
export class BackendErrorsMessagesModule { }
