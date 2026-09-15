import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { HamburgerComponent } from "./hamburget.component";
import { ProviderConfig } from "../../config/provider.config";

const meta: Meta<HamburgerComponent> = {
    title: "component/hamburger",
    component: HamburgerComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider())
    ]
};

export default meta;
type Story = StoryObj<HamburgerComponent>;

export const Default: Story = {};