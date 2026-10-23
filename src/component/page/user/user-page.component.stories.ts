import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { getProvider } from '../../../config/provider.config';
import { UserPageComponent } from './user-page.component';

const meta: Meta<UserPageComponent> = {
  title: 'page/user',
  component: UserPageComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<UserPageComponent>;

export const Default: Story = {};
