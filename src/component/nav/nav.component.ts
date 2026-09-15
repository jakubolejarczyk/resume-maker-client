import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";
import { AsyncPipe } from "@angular/common";

import { HamburgerComponent } from "../hamburger/hamburget.component";
import { MenuComponent } from "../menu/menu.component";
import { MenuStoreState } from "../../store/state/menu-store.state";

@Component({
    selector: "app-nav-component",
    templateUrl: "./nav.component.html",
    styleUrl: "./nav.component.scss",
    imports: [HamburgerComponent, MenuComponent, AsyncPipe]
})
export class NavComponent {
    store = inject(Store);

    mainMenuIsOpen = this.store.select(MenuStoreState.getMainMenuIsOpen);
}