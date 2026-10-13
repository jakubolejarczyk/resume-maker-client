import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { getStorybookProvider } from "../../../config/provider.config";
import { AnimalApiModel } from "../../../api/model/animal-api.model";
import { TableDataComponent } from "./table-data.component";
import { of } from "rxjs";

const meta: Meta<TableDataComponent<AnimalApiModel>> = {
    title: "component/data/table",
    component: TableDataComponent,
    decorators: [applicationConfig(getStorybookProvider())]
};

export default meta;
type Story = StoryObj<TableDataComponent<AnimalApiModel>>;

export const Default: Story = {
    args: {
        columns$: of([
            {
                id: "id",
                label: "Id",
                isVisible: true,
                isEditable: true,
                type: "string"
            },
            {
                id: "order",
                label: "Order",
                isVisible: true,
                isEditable: true,
                type: "string"
            }
        ]),
        items$: of([
            {
                id: 0,
                order: 0
            },
            {
                id: 1,
                order: 1
            }
        ])
    }
};