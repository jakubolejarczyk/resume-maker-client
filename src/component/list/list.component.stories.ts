import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { ProviderConfig } from "../../config/provider.config";
import { WindowDirective } from "../../directive/window.directive";
import { ListComponent } from "./list.component";

const meta: Meta<ListComponent> = {
    title: "component/list",
    component: ListComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<ListComponent>;

export const Default: Story = {
    render: () => ({
        template: "<app-list-component appWindowDirective></app-list-component>"
    })
};