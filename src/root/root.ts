import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './root.html',
  imports: [ButtonDirective]
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class Root {}
