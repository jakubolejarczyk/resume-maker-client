import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { ButtonFormComponent } from "./button-form.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<ButtonFormComponent> = {
    title: "component/form/button",
    component: ButtonFormComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<ButtonFormComponent>;

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

export const Disabled: Story = {
    args: {
        label: "Click me!",
        disabled: true
    }
};