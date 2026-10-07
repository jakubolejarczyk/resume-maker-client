import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { TableSmartComponent } from "./table-smart.component";
import { getStorybookProvider } from "../../../config/provider.config";
import { AnimalApiModel } from "../../../api/model/animal-api.model";
import { AnimalService } from "../../../service/animal.service";

const meta: Meta<TableSmartComponent<AnimalApiModel>> = {
    title: "component/smart/table",
    component: TableSmartComponent,
    decorators: [
        applicationConfig(getStorybookProvider())
    ]
};

export default meta;
type Story = StoryObj<TableSmartComponent<AnimalApiModel>>;

export const Default: Story = {
    args: {
        baseServiceType: AnimalService
    }
};