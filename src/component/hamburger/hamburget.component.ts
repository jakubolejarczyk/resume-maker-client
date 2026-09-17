import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";

import { NavStoreState } from "../../store/state/nav-store.state";
import { SwitchMenuIsOpen } from "../../store/action/nav-store.action";

@Component({
    selector: "app-hamburger-component",
    templateUrl: "./hamburger.component.html",
    styleUrl: "./hamburger.component.scss",
    imports: [AsyncPipe]
})
export class HamburgerComponent {
    store = inject(Store);

    menuIsOpen$ = this.store.select(NavStoreState.getMenuIsOpen);

    click() {
        this.store.dispatch(SwitchMenuIsOpen);
    }
}