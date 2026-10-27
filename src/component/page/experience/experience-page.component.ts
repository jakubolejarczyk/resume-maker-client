import { Component } from '@angular/core';

import { DomainViewComponent } from '../../view/domain/domain-view.component';
import { ExperienceService } from '../../../service/experience.service';
import { ResumeService } from '../../../service/resume.service';

@Component({
  selector: 'app-experience-page-component',
  templateUrl: './experience-page.component.html',
  imports: [DomainViewComponent],
})
export class ExperiencePageComponent {
  type = ExperienceService;
  parentType = ResumeService;
}
