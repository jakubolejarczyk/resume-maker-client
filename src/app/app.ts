import { Component } from '@angular/core';

import { NavComponent } from '../component/nav/nav.component';
import { WindowDirective } from '../directive/window.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavComponent, WindowDirective]
})
export class App {}