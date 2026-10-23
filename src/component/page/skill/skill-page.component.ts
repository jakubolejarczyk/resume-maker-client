import { Component } from '@angular/core';

import { DomainViewComponent } from '../../view/domain/domain-view.component';
import { SkillService } from '../../../service/skill.service';

@Component({
  selector: 'app-skill-page-component',
  templateUrl: './skill-page.component.html',
  imports: [DomainViewComponent],
})
export class SkillPageComponent {
  type = SkillService;
}
