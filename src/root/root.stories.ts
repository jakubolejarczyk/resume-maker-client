import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { ProviderConfig } from "../config/provider.config";
import { WindowDirective } from "../directive/window.directive";
import { Root } from "./root";

const meta: Meta<Root> = {
    title: "root",
    component: Root,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<Root>;

export const Default: Story = {};