import { Component } from '@angular/core';

import { DomainViewComponent } from '../../view/domain/domain-view.component';
import { EducationService } from '../../../service/education.service';

@Component({
  selector: 'app-education-page-component',
  templateUrl: './education-page.component.html',
  imports: [DomainViewComponent],
})
export class EducationPageComponent {
  type = EducationService;
}
