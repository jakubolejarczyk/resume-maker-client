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
    args: { label: "Click me!" }
};

export const Link: Story = {
    args: { ...Default.args, link: true }
};

export const Severity: Story = {
    args: { ...Default.args, severity: "danger" }
};

export const Disabled: Story = {
    args: { ...Default.args, disabled: true }
};