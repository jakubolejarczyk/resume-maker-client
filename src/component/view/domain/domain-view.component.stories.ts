import { applicationConfig, Meta, StoryObj } from '@storybook/angular';

import { getProvider } from '../../../config/provider.config';
import { UserService } from '../../../service/user.service';
import { DomainViewComponent } from './domain-view.component';
import { UserDataApiModel } from '../../../api/model/data/user-data-api.model';
import { SkillDataApiModel } from '../../../api/model/data/skill-data-api.model';
import { SkillService } from '../../../service/skill.service';
import { ResumeService } from '../../../service/resume.service';
import { ResumeDataApiModel } from '../../../api/model/data/resume-data-api.model';
import { ExperienceDataApiModel } from '../../../api/model/data/experience-data-api.model';
import { ExperienceService } from '../../../service/experience.service';
import { EducationDataApiModel } from '../../../api/model/data/education-data-api.model';
import { EducationService } from '../../../service/education.service';

const meta: Meta = {
  title: 'component/view/domain',
  component: DomainViewComponent,
  decorators: [applicationConfig(getProvider())],
};

export default meta;
type Story<TData> = StoryObj<DomainViewComponent<TData>>;

export const User: Story<UserDataApiModel> = {
  args: {
    type: UserService,
    parentId: undefined,
  },
};

export const Skill: Story<SkillDataApiModel> = {
  args: {
    type: SkillService,
    parentId: 0,
  },
};

export const Resume: Story<ResumeDataApiModel> = {
  args: {
    type: ResumeService,
    parentId: 0,
  },
};

export const Experience: Story<ExperienceDataApiModel> = {
  args: {
    type: ExperienceService,
    parentId: 0,
  },
};

export const Education: Story<EducationDataApiModel> = {
  args: {
    type: EducationService,
    parentId: 0,
  },
};
