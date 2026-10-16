import { inject } from "@angular/core";

import { BaseDatabaseData } from "../data/base-database.data";
import { BaseDatabaseModel } from "../model/base/base-database.model";

export class BaseDatabaseService<TData> {
  private readonly service: BaseDatabaseData<TData>;
  
  public nextId = 0;

  constructor(private readonly type: typeof BaseDatabaseData<TData>) {
    this.service = inject(type);
  }

  create(items: Omit<BaseDatabaseModel<TData>, "id">[]) {
    items.forEach(item => {
      const itemToCreate = {
        ...item,
        id: this.nextId
      } as BaseDatabaseModel<TData>;
      this.service.items.push(itemToCreate);
      this.nextId++;
    });
  }

  readAll() {
    return structuredClone(this.service.items);
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
    this.service.items = this.readAll()
      .map(item => itemsToUpdate.find(itemToUpdate => itemToUpdate.id === item.id) ?? item);
  }

  delete(ids: number[]) {
    this.service.items = this.readAll()
      .filter(item => !ids.includes(item.id));
  }
}