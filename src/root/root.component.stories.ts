import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { RootComponent } from "./root.component";
import { getProvider } from "../config/provider.config";

const meta: Meta<RootComponent> = {
    title: "component/root",
    component: RootComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<RootComponent>;

export const Default: Story = {};