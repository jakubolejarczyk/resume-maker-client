import { provideStore } from "@ngxs/store";

import { AnimalStoreState } from "../state/animal-store.state";

export const ANIMAL_STORE_PROVIDER = [AnimalStoreState, provideStore([AnimalStoreState])];
