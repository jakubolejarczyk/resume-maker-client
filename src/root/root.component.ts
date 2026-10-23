import { Component } from '@angular/core';

import { SidebarComponent } from '../component/view/sidebar/sidebar-view.component';
import { SkillPageComponent } from '../component/page/skill/skill-page.component';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  imports: [SidebarComponent, SkillPageComponent],
})
export class RootComponent {}
