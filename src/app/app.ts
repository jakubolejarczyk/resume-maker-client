import { Component } from '@angular/core';

import { NavComponent } from '../component/nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavComponent]
})
export class App {}