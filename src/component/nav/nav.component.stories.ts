import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { ProviderConfig } from "../../config/provider.config";
import { WindowDirective } from "../../directive/window.directive";
import { NavComponent } from "./nav.component";

const meta: Meta<NavComponent> = {
    title: "component/nav",
    component: NavComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<NavComponent>;

export const Default: Story = {
    render: () => ({
        template: "<app-nav-component appWindowDirective></app-nav-component>"
    })
};