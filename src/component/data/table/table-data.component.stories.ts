import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { TableDataComponent } from './table-data.component';
import { getProvider } from '../../../config/provider.config';
import { SkillService } from '../../../service/skill.service';
import { UserService } from '../../../service/user.service';
import { ResumeService } from '../../../service/resume.service';
import { ExperienceService } from '../../../service/experience.service';
import { EducationService } from '../../../service/education.service';

const meta: Meta<TableDataComponent> = {
  title: 'component/data/table',
  component: TableDataComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story = StoryObj<TableDataComponent>;

export const User: Story = {
  args: {
    type: UserService,
  },
};

export const Skill: Story = {
  args: {
    type: SkillService,
  },
};

export const Resume: Story = {
  args: {
    type: ResumeService,
  },
};

export const Experience: Story = {
  args: {
    type: ExperienceService,
  },
};

export const Education: Story = {
  args: {
    type: EducationService,
  },
};
