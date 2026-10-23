import { Component } from '@angular/core';

import { SkillPageComponent } from '../component/page/skill/skill-page.component';

@Component({
  selector: 'app-root-component',
  templateUrl: './root.component.html',
  imports: [SkillPageComponent],
})
export class RootComponent {}
