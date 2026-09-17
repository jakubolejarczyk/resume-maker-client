import { AsyncPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Store } from "@ngxs/store";
import { RouterLink } from "@angular/router";

import { NavStoreState } from "../../store/state/nav-store.state";
import { SetMenuIsOpen } from "../../store/action/nav-store.action";

@Component({
    selector: "app-menu-component",
    templateUrl: "./menu.component.html",
    styleUrl: "./menu.component.scss",
    imports: [AsyncPipe, RouterLink]
})
export class MenuComponent {
    store = inject(Store);

    options$ = this.store.select(NavStoreState.getOptions);

    click() {
        this.store.dispatch(new SetMenuIsOpen(false));
    }
}