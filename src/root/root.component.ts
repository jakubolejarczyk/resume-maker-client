import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from '../component/view/sidebar/sidebar-view.component';
import { ToastMessagesComponent } from '../component/messages/toast/toast-messages.component';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  imports: [SidebarComponent, ToastMessagesComponent, RouterOutlet],
})
export class RootComponent {}
