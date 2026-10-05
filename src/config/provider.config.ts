import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import { provideStore } from "@ngxs/store";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routesConfig } from "./routes.config";
import { UserStoreState } from "../store/state/user-store.state";
import { SkillStoreState } from "../store/state/skill-store.state";
import { ExperienceStoreState } from "../store/state/experience-store.state";
import { EducationStoreState } from "../store/state/education-store.state";
import { environment } from "../environments/environment";

export const getProvider = (): ApplicationConfig => {
    return {
        providers: [
            provideBrowserGlobalErrorListeners(),
            provideRouter(routesConfig, withHashLocation()),
            provideStore([
                UserStoreState,
                SkillStoreState,
                ExperienceStoreState,
                EducationStoreState
            ], withNgxsReduxDevtoolsPlugin()),
            providePrimeNG({
                theme: {
                    preset: Aura
                },
                license: environment.primengLicenseKey
            })
        ]
    };
};