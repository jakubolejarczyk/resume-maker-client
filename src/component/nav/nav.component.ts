import { Component, inject, OnInit } from "@angular/core";
import { AsyncPipe } from "@angular/common";
import { Store } from "@ngxs/store";
import { filter, tap } from "rxjs";

import { HamburgerComponent } from "../hamburger/hamburget.component";
import { MenuComponent } from "../menu/menu.component";
import { NavStoreState } from "../../store/state/nav-store.state";
import { WindowStoreState } from "../../store/state/window-store.state";
import { TABLET } from "../../const/window-width.const";
import { SetMenuIsOpen } from "../../store/action/nav-store.action";

@Component({
    selector: "app-nav-component",
    templateUrl: "./nav.component.html",
    styleUrl: "./nav.component.scss",
    imports: [HamburgerComponent, MenuComponent, AsyncPipe]
})
export class NavComponent implements OnInit {
    store = inject(Store);

    menuIsOpen$ = this.store.select(NavStoreState.getMenuIsOpen);

    width$ = this.store.select(WindowStoreState.getWidth);

    TABLET = TABLET;

    ngOnInit() {
        this.width$.pipe(
            filter(width => width >= TABLET),
            tap(() => this.store.dispatch(new SetMenuIsOpen(false)))
        ).subscribe();
    }
}