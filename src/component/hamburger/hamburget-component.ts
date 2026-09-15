import { Component, inject, output } from "@angular/core";
import { Store } from "@ngxs/store";
import { SwitchMainMenuIsOpen } from "../../store/action/menu-store.action";

@Component({
    selector: "app-hamburger-component",
    templateUrl: "./hamburger-component.html",
    styleUrl: "./hamburger-component.scss"
})
export class HamburgerComponent {
    isOpen = false;

    event = output<boolean>();

    store = inject(Store);

    click() {
        this.isOpen = !this.isOpen;
        this.event.emit(this.isOpen);
        this.store.dispatch(SwitchMainMenuIsOpen);
    }
}