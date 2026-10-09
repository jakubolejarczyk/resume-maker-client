import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { ExperiencesPageComponent } from "./experiences-page.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<ExperiencesPageComponent> = {
    title: "component/page/experiences",
    component: ExperiencesPageComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<ExperiencesPageComponent>;

export const Default: Story = {};