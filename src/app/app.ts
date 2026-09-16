import { Component } from '@angular/core';

import { NavComponent } from '../component/nav/nav.component';
import { ScreenDirective } from '../directive/screen.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavComponent, ScreenDirective]
})
export class App {}