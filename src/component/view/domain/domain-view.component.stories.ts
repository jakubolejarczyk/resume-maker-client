import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { DomainViewComponent } from "./domain-view.component";
import { BaseApiModel } from "../../../api/model/base-api.model";
import { getStorybookProvider } from "../../../config/provider.config";
import { AnimalService } from "../../../service/animal.service";

const meta: Meta<DomainViewComponent<BaseApiModel>> = {
    title: "component/view/domain",
    component: DomainViewComponent<BaseApiModel>,
    decorators: [
        applicationConfig(getStorybookProvider())
    ]
};

export default meta;
type Story = StoryObj<DomainViewComponent<BaseApiModel>>;

export const Default: Story = {
    args: {
        baseServiceType: AnimalService
    }
};