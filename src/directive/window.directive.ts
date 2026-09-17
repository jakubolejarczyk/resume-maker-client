import { Directive, inject, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { debounceTime, fromEvent, map, tap } from "rxjs";

import { SetWindowWidth } from "../store/action/window-store.action";

@Directive({
    selector: "[appWindowDirective]"
})
export class WindowDirective implements OnInit {
    store = inject(Store);

    ngOnInit() {
        this.store.dispatch(new SetWindowWidth(window.innerWidth));
        fromEvent(window, "resize").pipe(
            debounceTime(20),
            map(() => window.innerWidth),
            tap(width => this.store.dispatch(new SetWindowWidth(width)))
        ).subscribe();
    }
}