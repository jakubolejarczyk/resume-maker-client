import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { AppComponent } from "./app.component";
import { getProvider } from "../config/provider.config";

const meta: Meta<AppComponent> = {
    title: "component/app",
    component: AppComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<AppComponent>;

export const Default: Story = {};