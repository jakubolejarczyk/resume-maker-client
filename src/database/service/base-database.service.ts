import { inject } from "@angular/core";

import { BaseDatabaseData } from "../data/base-database.data";
import { BaseDatabaseModel } from "../model/base/base-database.model";

export class BaseDatabaseService<TData> {
  private readonly service: BaseDatabaseData<TData>;
  
  public nextId = 0;

  constructor(private readonly type: typeof BaseDatabaseData<TData>) {
    this.service = inject(type);
  }

  create(itemsToCreate: Omit<BaseDatabaseModel<TData>, "id">[]) {
    const items = this.service.getItems();
    itemsToCreate.forEach(itemToCreate => {
      const newItem = {
        ...itemToCreate,
        id: this.nextId
      } as BaseDatabaseModel<TData>;
      items.push(newItem);
      this.nextId++;
    });
    this.service.setItems(items);
  }

  // It is tested
  readAll() {
    return structuredClone(this.service.getItems());
  }

  readByIds(ids: number[]) {
    return this.readAll()
      .filter(item => ids.includes(item.id));
  }

  readByParentIds(parentIds: number[]) {
    return this.readAll()
      .filter(item => {
        const { parentId } = item.metadata;
        if (parentId === undefined) {
          return true;
        }
        return parentIds.includes(parentId);
      });
  }

  update(itemsToUpdate: BaseDatabaseModel<TData>[]) {
    const items = this.readAll()
      .map(item => itemsToUpdate.find(itemToUpdate => itemToUpdate.id === item.id) ?? item);
    this.service.setItems(items);
  }

  // It is tested
  delete(ids: number[]) {
    const items = this.readAll()
      .filter(item => !ids.includes(item.id));
    this.service.setItems(items);
  }
}