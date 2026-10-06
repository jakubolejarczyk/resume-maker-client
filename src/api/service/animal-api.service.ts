import { Injectable } from "@angular/core";

import { BaseApiService } from "./base-api.service";
import { AnimalApiModel } from "../model/animal-api.model";
import { AnimalMockService } from "../../mock/service/animal-mock.service";

@Injectable()
export class AnimalApiService extends BaseApiService<AnimalApiModel> {
    constructor() {
        super(AnimalMockService);
    }
}