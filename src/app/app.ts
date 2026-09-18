import { Component } from '@angular/core';

import { Root } from '../root/root';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Root],
})
export class App {}