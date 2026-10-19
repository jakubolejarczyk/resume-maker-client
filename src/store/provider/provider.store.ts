import { provideStore } from '@ngxs/store';

import { EducationStoreState } from '../state/education-store.state';
import { ExperienceStoreState } from '../state/experience-store.state';
import { ResumeStoreState } from '../state/resume-store.state';
import { SkillStoreState } from '../state/skill-store.state';
import { UserStoreState } from '../state/user-store.state';

export const providerStore = provideStore([
  EducationStoreState,
  ExperienceStoreState,
  ResumeStoreState,
  SkillStoreState,
  UserStoreState,
]);
