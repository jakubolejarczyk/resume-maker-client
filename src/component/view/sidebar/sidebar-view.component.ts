import { Component, signal } from '@angular/core';
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
  ],
})
export class SidebarComponent {
  isMobile = signal(false);

  constructor() {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 1023px)');
    this.isMobile.set(mql.matches);
    mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
  }
}
