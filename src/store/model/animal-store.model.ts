import { AnimalApiModel } from "../../api/service/base-api.service.spec";
import { BaseStoreModel } from "./base-store.model";

export type AnimalStoreModel = BaseStoreModel<AnimalApiModel>;