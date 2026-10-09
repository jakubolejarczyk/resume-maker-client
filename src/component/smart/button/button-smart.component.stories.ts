import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { ButtonSmartComponent } from "./button-smart.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<ButtonSmartComponent> = {
    title: "component/smart/button",
    component: ButtonSmartComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<ButtonSmartComponent>;

export const Default: Story = {
    args: {
        label: "Click me!"
    }
};

export const Severity: Story = {
    args: {
        label: "Click me!",
        severity: "danger"
    }
};