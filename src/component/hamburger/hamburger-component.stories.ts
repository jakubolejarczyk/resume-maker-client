import { Meta, StoryObj } from "@storybook/angular";

import { HamburgerComponent } from "./hamburget-component";

const meta: Meta<HamburgerComponent> = {
    title: "component/hamburger",
    component: HamburgerComponent
};

export default meta;
type Story = StoryObj<HamburgerComponent>;

export const Close: Story = {
    args: {
        isOpen: false
    }
};

export const Open: Story = {
    args: {
        isOpen: true
    }
};