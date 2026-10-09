import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { EducationsPageComponent } from "./educations-page.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<EducationsPageComponent> = {
    title: "component/page/educations",
    component: EducationsPageComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<EducationsPageComponent>;

export const Default: Story = {};