import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-toast-messages-component',
  template: '<p-toast />',
  imports: [ToastModule],
})
export class ToastMessagesComponent {}
