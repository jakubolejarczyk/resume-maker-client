import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { TableSmartComponent } from "./table-smart.component";
import { getStorybookProvider } from "../../../config/provider.config";

const meta: Meta<TableSmartComponent> = {
    title: "component/smart/table",
    component: TableSmartComponent,
    decorators: [
        applicationConfig(getStorybookProvider())
    ]
};

export default meta;
type Story = StoryObj<TableSmartComponent>;

export const Default: Story = {};