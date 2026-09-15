import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngxs/store";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";

import { MenuStoreState } from "../store/state/menu-store.state";
import { routesConfig } from "./routes.config";

export class ProviderConfig {
    static getProvider(): ApplicationConfig {
        return {
            providers: [
                provideBrowserGlobalErrorListeners(),
                provideRouter(routesConfig),
                provideStore([MenuStoreState], withNgxsReduxDevtoolsPlugin())
            ],
        };
    }
}