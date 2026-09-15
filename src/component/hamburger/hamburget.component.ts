import { Component, inject } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Store } from "@ngxs/store";

import { MenuStoreState } from "../../store/state/menu-store.state";
import { SwitchMainMenuIsOpen } from "../../store/action/menu-store.action";

@Component({
    selector: "app-hamburger-component",
    templateUrl: "./hamburger.component.html",
    styleUrl: "./hamburger.component.scss",
    imports: [AsyncPipe]
})
export class HamburgerComponent {
    store = inject(Store);

    mainMenuIsOpen = this.store.select(MenuStoreState.getMainMenuIsOpen);

    click() {
        this.store.dispatch(SwitchMainMenuIsOpen);
    }
}