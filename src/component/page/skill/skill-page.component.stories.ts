import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { getProvider } from '../../../config/provider.config';
import { SkillPageComponent } from './skill-page.component';

const meta: Meta<SkillPageComponent> = {
  title: 'page/skill',
  component: SkillPageComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<SkillPageComponent>;

export const Default: Story = {};
