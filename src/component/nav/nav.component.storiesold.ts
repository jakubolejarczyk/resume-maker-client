import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { NavComponent } from "./nav.component";
import { ProviderConfig } from "../../config/provider.config";

const meta: Meta<NavComponent> = {
    title: "component/nav",
    component: NavComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider())
    ]
};

export default meta;
type Story = StoryObj<NavComponent>;

export const Default: Story = {};