import { Component, inject, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { User } from '@primeicons/angular/user';
import { Inbox } from '@primeicons/angular/inbox';
import { Code } from '@primeicons/angular/code';
import { Building } from '@primeicons/angular/building';
import { GraduationCap } from '@primeicons/angular/graduation-cap';
import { Sidebar } from '@primeicons/angular/sidebar';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

import { UserService } from '../../../service/user.service';
import { ResumeService } from '../../../service/resume.service';

@Component({
  selector: 'app-sidebar-view-component',
  templateUrl: './sidebar-view.component.html',
  imports: [
    AvatarModule,
    SidebarModule,
    ButtonModule,
    User,
    Inbox,
    Code,
    Building,
    GraduationCap,
    Sidebar,
    RouterLink,
    AsyncPipe,
  ],
})
export class SidebarComponent {
  isMobile = signal(false);
  user = inject(UserService);
  resume = inject(ResumeService);

  constructor() {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 1023px)');
    this.isMobile.set(mql.matches);
    mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
  }
}
