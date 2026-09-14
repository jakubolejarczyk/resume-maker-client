import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavComponent } from '../component/nav/nav-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavComponent, RouterOutlet]
})
export class App {}
