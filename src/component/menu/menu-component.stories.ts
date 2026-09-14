import { Meta, StoryObj } from "@storybook/angular";

import { MenuComponent } from "./menu-component";

const meta: Meta<MenuComponent> = {
    title: "component/menu",
    component: MenuComponent
};

export default meta;
type Story = StoryObj<MenuComponent>;

export const Default: Story = {};