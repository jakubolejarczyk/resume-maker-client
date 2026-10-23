import { Component } from '@angular/core';

import { RootComponent } from '../root/root.component';

@Component({
  selector: 'app',
  template: '<app-root-component></app-root-component>',
  imports: [RootComponent],
})
export class AppComponent {}
