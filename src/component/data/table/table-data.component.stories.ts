import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { TableDataComponent } from './table-data.component';
import { getProvider } from '../../../config/provider.config';

const meta: Meta<TableDataComponent> = {
  title: 'component/data/table',
  component: TableDataComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<TableDataComponent>;

export const User: Story = {};
