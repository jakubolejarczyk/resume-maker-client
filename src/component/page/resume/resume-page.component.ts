import { Component } from '@angular/core';

import { DomainViewComponent } from '../../view/domain/domain-view.component';
import { ResumeService } from '../../../service/resume.service';

@Component({
  selector: 'app-resume-page-component',
  templateUrl: './resume-page.component.html',
  imports: [DomainViewComponent],
})
export class ResumePageComponent {
  type = ResumeService;
}
