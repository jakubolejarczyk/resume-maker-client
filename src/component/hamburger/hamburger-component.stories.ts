import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { HamburgerComponent } from "./hamburget-component";
import { provideStore } from "@ngxs/store";
import { TestState } from "../../store/state/test-state";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";

const meta: Meta<HamburgerComponent> = {
    title: "component/hamburger",
    component: HamburgerComponent,
    decorators: [
        applicationConfig({
            providers: [
                provideStore([TestState], withNgxsReduxDevtoolsPlugin())
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