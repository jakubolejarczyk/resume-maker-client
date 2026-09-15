import { ApplicationConfig } from '@angular/core';

import { ProviderConfig } from '../config/provider.config';

export const appConfig: ApplicationConfig = ProviderConfig.getProvider();
