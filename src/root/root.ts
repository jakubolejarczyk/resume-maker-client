import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

import { TableSmartComponent } from '../component/smart/table/table-smart.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './root.html',
  imports: [ButtonDirective, TableSmartComponent]
})
export class Root {
  userService = UserService
}
