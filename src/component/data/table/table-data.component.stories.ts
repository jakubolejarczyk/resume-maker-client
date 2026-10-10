import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { getStorybookProvider } from "../../../config/provider.config";
import { AnimalApiModel } from "../../../api/model/animal-api.model";
import { AnimalService } from "../../../service/animal.service";
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
        baseServiceType: AnimalService
    }
};