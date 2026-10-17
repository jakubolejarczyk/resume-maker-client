export namespace BaseStoreDatabaseMockAction {
  export class DeleteByIds {
    constructor(public ids: number[]) {}

    static buildActionType(actionType: string) {
      return `[${actionType}] DeleteByIds`;
    }
  }

  export class DeleteByParentIds {
    constructor(public parentIds: number[]) {}

    static buildActionType(actionType: string) {
      return `[${actionType}] DeleteByParentIds`;
    }
  }
}
