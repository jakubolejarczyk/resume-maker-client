import { StatusType } from "../../../type/status.type";

export interface UserDtoModel {
    id: string;
    firstName: string;
    lastName: string;
    status: StatusType;
}