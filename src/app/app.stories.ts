import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { App } from "./app";
import { ProviderConfig } from "../config/provider.config";
import { WindowDirective } from "../directive/window.directive";

const meta: Meta<App> = {
    title: "app",
    component: App,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<App>;

export const Default: Story = {
    render: () => ({
        template: "<app-root appWindowDirective></app-root>"
    })
};