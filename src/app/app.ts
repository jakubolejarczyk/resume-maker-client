import { Component } from '@angular/core';

import { RootDashboard } from '../dashboard/root/root-dashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RootDashboard]
})
export class App {}