import { ApplicationConfig } from "@angular/core";
import { withNgxsReduxDevtoolsPlugin } from "@ngxs/devtools-plugin";
import { provideStore } from "@ngxs/store";

import { MenuStoreState } from "../state/menu-store.state";

export const storeProvider = (): ApplicationConfig['providers'] => [
    provideStore([MenuStoreState], withNgxsReduxDevtoolsPlugin())
];