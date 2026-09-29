import { SkillApiModel } from "../../api/model/skill-api.model";
import { ReadAllBaseStoreAction } from "./base-store.action";

export class ReadAllSkillStoreAction extends ReadAllBaseStoreAction<SkillApiModel> {
    static readonly type = "[SkillStoreState] Read All";
}