import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { App } from "./app";
import { ProviderConfig } from "../config/provider.config";

const meta: Meta<App> = {
    title: "app",
    component: App,
    decorators: [
        applicationConfig(ProviderConfig.getProvider())
    ]
};

export default meta;
type Story = StoryObj<App>;

export const Default: Story = {};