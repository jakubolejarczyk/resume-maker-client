import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { Root } from "./root";
import { getProvider } from "../config/provider.config";

const meta: Meta<Root> = {
    title: "root",
    component: Root,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<Root>;

export const Default: Story = {};