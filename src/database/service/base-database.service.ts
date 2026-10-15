import { BaseDatabaseModel } from "../model/base-database.model";

export class BaseDatabaseService<TItem extends BaseDatabaseModel> {
  public nextId = 0;

  constructor(private items: TItem[]) {}

  create(items: Omit<TItem, "id">[]) {
    items.forEach(item => {
      const itemToCreate: TItem = { ...item, id: this.nextId } as TItem;
      this.items.push(itemToCreate);
      this.nextId++;
    });
  }

  readAll() {
    return structuredClone(this.items);
  }

  readByIds(ids: number[]) {
    return structuredClone(this.items)
      .filter(item => ids.includes(item.id));
  }

  readByParentIds(parentIds: number[]) {
    return structuredClone(this.items)
      .filter(item => {
        if (item.parentId === undefined) return true;
        return parentIds.includes(item.parentId);
      });
  }

  update(itemsToUpdate: TItem[]) {
    this.items = structuredClone(this.items)
      .map(item => itemsToUpdate.find(itemToUpdate => itemToUpdate.id === item.id) ?? item);
  }

  delete(ids: number[]) {
    this.items = structuredClone(this.items)
      .filter(item => !ids.includes(item.id));
  }
}