import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngxs/store";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";

// import { MenuStoreState } from "../store/state/nav-store.state";
import { routesConfig } from "./routes.config";
import { NavStoreState } from "../store/state/nav-store.state";
import { WindowStoreState } from "../store/state/window-store.state";
// import { ScreenStoreState } from "../store/state/window-store.state";

export class ProviderConfig {
    static getProvider(): ApplicationConfig {
        return {
            providers: [
                provideBrowserGlobalErrorListeners(),
                provideRouter(routesConfig),
                provideStore([NavStoreState, WindowStoreState], withNgxsReduxDevtoolsPlugin())
            ]
        };
    }
}