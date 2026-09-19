import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { ProviderConfig } from "../../config/provider.config";
import { WindowDirective } from "../../directive/window.directive";
import { UsersTableComponent } from "./users-table.component";

const meta: Meta<UsersTableComponent> = {
    title: "component/users-table",
    component: UsersTableComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [WindowDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<UsersTableComponent>;

export const Default: Story = {
    render: () => ({
        template: "<app-users-table-component appWindowDirective></app-users-table-component>"
    })
};