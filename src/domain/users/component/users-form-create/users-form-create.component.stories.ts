import { Meta, StoryObj } from "@storybook/angular";

import { UsersFormCreateComponent } from "./users-form-create.component";

const meta: Meta<UsersFormCreateComponent> = {
    title: "domain/component/users-form-create",
    component: UsersFormCreateComponent
};

export default meta;
type Story = StoryObj<UsersFormCreateComponent>;

export const Default: Story = {};