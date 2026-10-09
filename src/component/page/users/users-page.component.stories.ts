import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { UsersPageComponent } from "./users-page.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<UsersPageComponent> = {
    title: "component/page/users",
    component: UsersPageComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<UsersPageComponent>;

export const Default: Story = {};