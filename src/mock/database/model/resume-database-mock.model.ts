import { CommonBaseDatabaseMockModel, UserIdBaseDatabaseMockModel } from "./base-database-mock.model";

export interface ResumeDatabaseMockModel extends CommonBaseDatabaseMockModel, UserIdBaseDatabaseMockModel {
    name: string;
}