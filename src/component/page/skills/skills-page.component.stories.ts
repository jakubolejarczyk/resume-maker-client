import { applicationConfig, Meta, StoryObj } from "@storybook/angular";

import { SkillsPageComponent } from "./skills-page.component";
import { getProvider } from "../../../config/provider.config";

const meta: Meta<SkillsPageComponent> = {
    title: "component/page/skills",
    component: SkillsPageComponent,
    decorators: [
        applicationConfig(getProvider())
    ]
};

export default meta;
type Story = StoryObj<SkillsPageComponent>;

export const Default: Story = {};