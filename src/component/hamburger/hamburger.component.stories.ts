import { applicationConfig, Meta, moduleMetadata, StoryObj } from "@storybook/angular";

import { HamburgerComponent } from "./hamburget.component";
import { ProviderConfig } from "../../config/provider.config";
import { ScreenDirective } from '../../directive/screen.directive';

const meta: Meta<HamburgerComponent> = {
    title: "component/hamburger",
    component: HamburgerComponent,
    decorators: [
        applicationConfig(ProviderConfig.getProvider()),
        moduleMetadata({
            imports: [ScreenDirective]
        })
    ]
};

export default meta;
type Story = StoryObj<HamburgerComponent>;

export const Default: Story = {
    render: (args) => ({
        props: args,
        template: `
            <app-hamburger-component appScreenDirective></app-hamburger-component>
        `
    })
};