import { Directive, inject, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { fromEvent, tap } from "rxjs";

import { SetScreenType } from "../store/action/screen-store.action";

@Directive({
    selector: "[appScreenDirective]"
})
export class ScreenDirective implements OnInit {
    store = inject(Store);

    ngOnInit() {
        this.store.dispatch(new SetScreenType(window.innerWidth));
        fromEvent(window, "resize").pipe(
            tap(() => this.store.dispatch(new SetScreenType(window.innerWidth)))
        ).subscribe();
    }
}