import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { getProvider } from '../../../config/provider.config';
import { ExperiencePageComponent } from './experience-page.component';

const meta: Meta<ExperiencePageComponent> = {
  title: 'page/experience',
  component: ExperiencePageComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<ExperiencePageComponent>;

export const Default: Story = {};
