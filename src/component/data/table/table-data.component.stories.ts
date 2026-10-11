import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { getStorybookProvider } from "../../../config/provider.config";
import { AnimalApiModel } from "../../../api/model/animal-api.model";
import { TableDataComponent } from "./table-data.component";

const meta: Meta<TableDataComponent<AnimalApiModel>> = {
    title: "component/data/table",
    component: TableDataComponent,
    decorators: [
        applicationConfig(getStorybookProvider())
    ]
};

export default meta;
type Story = StoryObj<TableDataComponent<AnimalApiModel>>;

export const Default: Story = {
    args: {
        columns: [
            {
                id: "id",
                label: "Id",
                isVisible: true,
                type: "string"
            },
            {
                id: "order",
                label: "Order",
                isVisible: true,
                type: "string"
            }
        ],
        items: [
            {
                id: 0,
                order: 0
            },
            {
                id: 1,
                order: 1
            }
        ]
    }
};