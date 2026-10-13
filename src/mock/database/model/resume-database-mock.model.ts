import { CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface ResumeDatabaseMockModel extends CommonBaseDatabaseMockModel, ParentIdBaseDatabaseMockModel {
    name: string;
}