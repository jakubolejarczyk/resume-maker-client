import { Component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Store } from "@ngxs/store";

import { HamburgerComponent } from "../hamburger/hamburget.component";
import { MenuComponent } from "../menu/menu.component";
import { MenuStoreState } from "../../store/state/nav-store.state";
import { ScreenStoreState } from "../../store/state/window-store.state";

@Component({
    selector: "app-nav-component",
    templateUrl: "./nav.component.html",
    styleUrl: "./nav.component.scss",
    imports: [HamburgerComponent, MenuComponent, AsyncPipe]
})
export class NavComponent {
    store = inject(Store);

    mainMenuIsOpen$ = this.store.select(MenuStoreState.getMainMenuIsOpen);

    screenSize$ = this.store.select(ScreenStoreState.getScreenSize);
}