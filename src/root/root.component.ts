import { Component } from '@angular/core';

import { SidebarComponent } from '../component/view/sidebar/sidebar-view.component';
import { ToastMessagesComponent } from '../component/messages/toast/toast-messages.component';
import { ExperiencePageComponent } from '../component/page/experience/experience-page.component';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  imports: [SidebarComponent, ToastMessagesComponent, ExperiencePageComponent],
})
export class RootComponent {}
