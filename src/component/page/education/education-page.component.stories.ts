import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { getProvider } from '../../../config/provider.config';
import { EducationPageComponent } from './education-page.component';

const meta: Meta<EducationPageComponent> = {
  title: 'page/education',
  component: EducationPageComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<EducationPageComponent>;

export const Default: Story = {};
