import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { HamburgerComponent } from "./hamburget-component";
import { storeProvider } from "../../store/provider/store.provider";

const meta: Meta<HamburgerComponent> = {
    title: "component/hamburger",
    component: HamburgerComponent,
    decorators: [
        applicationConfig({
            providers: [
                ...storeProvider()
            ]
        })
    ]
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