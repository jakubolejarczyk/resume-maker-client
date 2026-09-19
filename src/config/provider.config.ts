import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import { provideStore } from "@ngxs/store";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";

import { routesConfig } from "./routes.config";
import { UsersApiState } from "../api/state/users-api.state";

export class ProviderConfig {
    static getProvider(): ApplicationConfig {
        return {
            providers: [
                provideBrowserGlobalErrorListeners(),
                provideRouter(routesConfig, withHashLocation()),
                provideStore([UsersApiState], withNgxsReduxDevtoolsPlugin())
            ]
        };
    }
}