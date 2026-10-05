import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Root } from '../root/root';

@Component({
  selector: 'app',
  template: '<app-root></app-root>',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Root],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class App {}
