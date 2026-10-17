import { Component, input } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { BadgeSeverity } from 'primeng/types/badge';

@Component({
  selector: 'app-badge-misc-component',
  templateUrl: './badge-misc.component.html',
  imports: [BadgeModule],
})
export class BadgeMiscComponent {
  value = input.required<string>();

  severity = input.required<BadgeSeverity>();
}
