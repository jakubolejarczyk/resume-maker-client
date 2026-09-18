export class DeleteUser {
    static readonly type = "[UserStoreState] Delete User";

    constructor(public id: number) {}
}