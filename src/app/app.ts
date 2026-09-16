import { Component, HostListener, inject, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AsyncPipe } from '@angular/common';

import { NavComponent } from '../component/nav/nav.component';
import { SetScreenSize } from '../store/action/screen-store.action';
import { ScreenStoreState } from '../store/state/screen-store.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [NavComponent, AsyncPipe]
})
export class App implements OnInit {
  store = inject(Store);

  screenSize = this.store.select(ScreenStoreState.getScreenSize);

  @HostListener("window:resize")
  windowResize() {
    this.store.dispatch(new SetScreenSize(window.innerWidth));
  }

  ngOnInit() {
    this.store.dispatch(new SetScreenSize(window.innerWidth));
  }
}