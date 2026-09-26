import { Component } from '@angular/core';

import { Root } from '../root/root';

@Component({
  selector: 'app',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Root],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class App {}