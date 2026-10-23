import { Component } from '@angular/core';

import { DomainViewComponent } from '../../view/domain/domain-view.component';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-user-page-component',
  templateUrl: './user-page.component.html',
  imports: [DomainViewComponent],
})
export class UserPageComponent {
  type = UserService;
}
