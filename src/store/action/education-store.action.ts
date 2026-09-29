import { EducationApiModel } from "../../api/model/education-api.model";
import { ReadAllBaseStoreAction } from "./base-store.action";

export class ReadAllEducationStoreAction extends ReadAllBaseStoreAction<EducationApiModel> {
    static readonly type = "[EducationStoreState] Read All";
}