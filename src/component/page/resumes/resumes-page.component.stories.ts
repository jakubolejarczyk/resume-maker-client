import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { ResumesPageComponent } from "./resumes-page.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<ResumesPageComponent> = {
    title: "component/page/resumes",
    component: ResumesPageComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<ResumesPageComponent>;

export const Default: Story = {};