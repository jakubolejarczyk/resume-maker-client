import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";
import { ConfirmationService, MessageService } from "primeng/api";

import { ButtonFormComponent } from "./button-form.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<ButtonFormComponent> = {
    title: "component/form/button",
    component: ButtonFormComponent,
    decorators: [
        moduleMetadata({
            providers: [ConfirmationService, MessageService]
        }),
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
        severity: "secondary"
    }
};

export const Disabled: Story = {
    args: {
        label: "Click me!",
        severity: "secondary",
        disabled: true
    }
};

export const ShowConfirm: Story = {
    args: {
        label: "Click me!",
        severity: "secondary",
        showConfirm: true
    }
};