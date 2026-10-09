import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Briefcase } from '@primeicons/angular/briefcase';
import { Users } from '@primeicons/angular/users';
import { GraduationCap } from '@primeicons/angular/graduation-cap';
import { Code } from '@primeicons/angular/code';
import { Sidebar } from '@primeicons/angular/sidebar';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: "app-root-component",
    templateUrl: "./root.component.html",
    standalone: true,
    imports: [
        AvatarModule,
        SidebarModule,
        ButtonModule,
        Briefcase,
        Users,
        GraduationCap,
        Code,
        Sidebar,
        RouterOutlet,
        RouterLinkWithHref
    ]
})
export class RootComponent {
    isMobile = signal(false);

    constructor() {
        if (typeof window === 'undefined') return;
        const mql = window.matchMedia('(max-width: 1023px)');
        this.isMobile.set(mql.matches);
        mql.addEventListener('change', (e) => this.isMobile.set(e.matches));
    }
}