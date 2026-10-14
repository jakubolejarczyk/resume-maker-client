import { StateContext } from "@ngxs/store";

import { BaseStoreDatabaseMockAction } from "../action/base-store-database-mock.action";
import { BaseStoreDatabaseMockModel } from "../model/base-store-database-mock.model";
import { BaseDatabaseMockModel } from "../../model/base-database-mock.model";

export class BaseStoreDatabaseMockState<
  TItem extends BaseDatabaseMockModel,
  TStateContext extends BaseStoreDatabaseMockModel<TItem> = BaseStoreDatabaseMockModel<TItem>
> {
  protected static baseGetItems<TItem extends BaseDatabaseMockModel>(state: BaseStoreDatabaseMockModel<TItem>) {
    return state.items;
  }

  protected baseDeleteByIds<TAction extends BaseStoreDatabaseMockAction.DeleteByIds>(context: StateContext<TStateContext>, action: TAction) {
    const currentState = context.getState();
    const newState: TStateContext = {
      items: currentState.items.filter(item => !action.ids.includes(item.id))
    } as TStateContext;
    context.setState(newState);
  }

  protected baseDeleteByParentIds<TAction extends BaseStoreDatabaseMockAction.DeleteByParentIds>(context: StateContext<TStateContext>, action: TAction) {
    const currentState = context.getState();
    const newState: TStateContext = {
      items: currentState.items.filter(item => {
        if (item.parentId !== undefined) {
          return !action.parentIds.includes(item.parentId);
        }
        return true;
      })
    } as TStateContext;
    context.setState(newState);
  }
}