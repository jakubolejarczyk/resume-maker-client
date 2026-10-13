import { inject } from "@angular/core";
import { Store } from "@ngxs/store";

export class BaseMockService {
    protected store = inject(Store);
}