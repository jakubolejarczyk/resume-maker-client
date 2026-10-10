import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { InputTextSmartComponent } from "./input-text-smart.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<InputTextSmartComponent> = {
    title: "component/smart/input-text",
    component: InputTextSmartComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<InputTextSmartComponent>;

export const Default: Story = {};