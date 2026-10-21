import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngxs/store';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routesConfig } from './routes.config';
import { UserStoreState } from '../store/state/user-store.state';
import { SkillStoreState } from '../store/state/skill-store.state';
import { ExperienceStoreState } from '../store/state/experience-store.state';
import { EducationStoreState } from '../store/state/education-store.state';
import { environment } from '../environments/environment';
import { ResumeStoreState } from '../store/state/resume-store.state';
import { ConfirmationService, MessageService } from 'primeng/api';

export const getProvider = (): ApplicationConfig => {
  return {
    providers: [...getBaseProvider(), ...getProvideStore()],
  };
};

export const getStorybookProvider = (): ApplicationConfig => {
  return {
    providers: [...getBaseProvider(), ...getStorybookProvideStore()],
  };
};

const getBaseProvider = (): ApplicationConfig['providers'] => {
  return [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routesConfig),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      license: environment.primengLicenseKey,
    }),
    ConfirmationService,
    MessageService,
  ];
};

const getProvideStore = (): ApplicationConfig['providers'] => {
  return [
    provideStore(
      [
        UserStoreState,
        SkillStoreState,
        ExperienceStoreState,
        EducationStoreState,
        ResumeStoreState,
      ],
      withNgxsReduxDevtoolsPlugin(),
    ),
  ];
};

const getStorybookProvideStore = (): ApplicationConfig['providers'] => {
  return [provideStore([], withNgxsReduxDevtoolsPlugin())];
};
