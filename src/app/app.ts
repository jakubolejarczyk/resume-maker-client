import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from '../component/nav/nav.component';
import { WindowDirective } from '../directive/window.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavComponent, WindowDirective, RouterOutlet]
})
export class App {}