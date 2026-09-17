import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { ProviderConfig } from "../../config/provider.config";
import { WindowDirective } from "../../directive/window.directive";
import { HamburgerComponent } from "./hamburget.component";

const meta: Meta<HamburgerComponent> = {
    title: "component/hamburger",
    component: HamburgerComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<HamburgerComponent>;

export const Default: Story = {
    render: () => ({
        template: "<app-hamburger-component appWindowDirective></app-hamburger-component>"
    })
};