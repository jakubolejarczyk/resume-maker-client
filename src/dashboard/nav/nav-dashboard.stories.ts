import { Meta, StoryObj } from "@storybook/angular";

import { NavDashboard } from "./nav-dashboard";

const meta: Meta<NavDashboard> = {
    title: "dashboard/nav",
    component: NavDashboard
};

export default meta;
type Story = StoryObj<NavDashboard>;

export const Default: Story = {};