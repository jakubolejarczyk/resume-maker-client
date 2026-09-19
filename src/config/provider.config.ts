import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter, withHashLocation } from "@angular/router";
import { provideStore } from "@ngxs/store";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";

import { routesConfig } from "./routes.config";
import { NavStoreState } from "../store/state/nav-store.state";
import { WindowStoreState } from "../store/state/window-store.state";
import { UserStoreState } from "../store/state/user-store.state";
import { UsersStateStore } from "../domain/users/store/users-state.store";

export class ProviderConfig {
    static getProvider(): ApplicationConfig {
        return {
            providers: [
                provideBrowserGlobalErrorListeners(),
                provideRouter(routesConfig, withHashLocation()),
                provideStore([
                    NavStoreState,
                    WindowStoreState,
                    UserStoreState,
                    UsersStateStore
                ], withNgxsReduxDevtoolsPlugin())
            ]
        };
    }
}