import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { getProvider } from '../../../config/provider.config';
import { ResumePageComponent } from './resume-page.component';

const meta: Meta<ResumePageComponent> = {
  title: 'page/resume',
  component: ResumePageComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<ResumePageComponent>;

export const Default: Story = {};
