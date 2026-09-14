import { Component } from "@angular/core";

@Component({
    selector: "app-hamburger-component",
    templateUrl: "./hamburger-component.html",
    styleUrl: "./hamburger-component.scss"
})
export class HamburgerComponent {
    isOpen = false;

    click() {
        this.isOpen = !this.isOpen;
    }
}