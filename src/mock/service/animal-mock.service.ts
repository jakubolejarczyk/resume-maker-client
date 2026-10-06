import { Injectable } from "@angular/core";

import { BaseMockService } from "./base-mock.service";
import { AnimalMockModel } from "../model/animal-mock.model";

@Injectable()
export class AnimalMockService extends BaseMockService<AnimalMockModel> {
    constructor() {
        super([
            { id: 0, name: "Dog" },
            { id: 1, name: "Cat" }
        ]);
    }
}