import { ExperienceApiModel } from "../../api/model/experience-api.model";
import { ReadAllBaseStoreAction } from "./base-store.action";

export class ReadAllExperienceStoreAction extends ReadAllBaseStoreAction<ExperienceApiModel> {
    static readonly type = "[ExperienceStoreState] Read All";
}