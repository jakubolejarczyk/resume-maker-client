import { Component } from "@angular/core";

import { Root } from "../root/root";

@Component({
  selector: 'app',
  template: '<app-root></app-root>',
  imports: [Root],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class App {}