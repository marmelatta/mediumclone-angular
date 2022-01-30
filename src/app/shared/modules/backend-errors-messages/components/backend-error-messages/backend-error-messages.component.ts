import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorsInteface} from "../../../../types/backendErrors.inteface";

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit {
  // @ts-ignore
  @Input() backendErrors: BackendErrorsInteface;

  // @ts-ignore
  errorsMessages: string[];

  constructor() { }

  ngOnInit(): void {
    this.errorsMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ');
      return `${name} ${messages}`;
    })
  }

}
