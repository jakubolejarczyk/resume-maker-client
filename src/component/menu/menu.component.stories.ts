import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { MenuComponent } from "./menu.component";
import { ProviderConfig } from "../../config/provider.config";

const meta: Meta<MenuComponent> = {
    title: "component/menu",
    component: MenuComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider())
    ]
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {};