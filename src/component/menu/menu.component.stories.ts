import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { ProviderConfig } from "../../config/provider.config";
import { WindowDirective } from "../../directive/window.directive";
import { MenuComponent } from "./menu.component";

const meta: Meta<MenuComponent> = {
    title: "component/menu",
    component: MenuComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {
    render: () => ({
        template: "<app-menu-component appWindowDirective></app-menu-component>"
    })
};