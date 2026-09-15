import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";
import { AsyncPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

import { MenuStoreState } from "../../store/state/menu-store.state";
import { SwitchMainMenuIsOpen } from "../../store/action/menu-store.action";

@Component({
    selector: "app-menu-component",
    templateUrl: "./menu.component.html",
    styleUrl: "./menu.component.scss",
    imports: [AsyncPipe, RouterLink]
})
export class MenuComponent {
    store = inject(Store);

    options = this.store.select(MenuStoreState.getOptions);

    click() {
        this.store.dispatch(SwitchMainMenuIsOpen);
    }
}