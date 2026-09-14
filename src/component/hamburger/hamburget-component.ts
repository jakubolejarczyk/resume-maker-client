import { Component, output } from "@angular/core";

@Component({
    selector: "app-hamburger-component",
    templateUrl: "./hamburger-component.html",
    styleUrl: "./hamburger-component.scss"
})
export class HamburgerComponent {
    isOpen = false;

    event = output<boolean>();

    click() {
        this.isOpen = !this.isOpen;
        this.event.emit(this.isOpen);
    }
}