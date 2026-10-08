import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserService } from '../service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.html',
  imports: [RouterOutlet]
})
export class Root {
  userService = UserService
}
