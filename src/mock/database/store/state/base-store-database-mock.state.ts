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
    const newItems = currentState.items
      .map(item => ({ ...item }))
      .filter(item => !action.ids.includes(item.id))
      .reduce((acc, curr) => {
        if (!acc.has(curr.parentId)) {
          acc.set(curr.parentId, []);
        }
        const group = acc.get(curr.parentId) ?? [];
        group.push(curr);
        acc.set(curr.parentId, group);
        return acc;
      }, new Map<number | undefined, TItem[]>())
    newItems.forEach(group => {
      group.forEach((item, index) => item.order = index);
    });
    const resultItems = Array.from(newItems.values()).flat();
    const newState: TStateContext = { items: resultItems } as TStateContext;
    context.setState(newState);
  }

  protected baseDeleteByParentIds<TAction extends BaseStoreDatabaseMockAction.DeleteByParentIds>(context: StateContext<TStateContext>, action: TAction) {
    const currentState = context.getState();
    const newItems = currentState.items
      .map(item => ({ ...item }))
      .filter(item => item.parentId !== undefined ? !action.parentIds.includes(item.parentId) : true);
    const newState: TStateContext = { items: newItems } as TStateContext;
    context.setState(newState);
  }
}