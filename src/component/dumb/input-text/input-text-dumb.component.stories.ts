import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { InputTextDumbComponent } from "./input-text-dumb.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<InputTextDumbComponent> = {
    title: "component/dumb/input-text",
    component: InputTextDumbComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<InputTextDumbComponent>;

export const Default: Story = {};