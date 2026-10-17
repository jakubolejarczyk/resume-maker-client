import { inject } from "@angular/core";

import { BaseDatabaseData } from "../data/base-database.data";
import { BaseDatabaseModel } from "../model/base/base-database.model";

export class BaseDatabaseService<TData> {
  private readonly service: BaseDatabaseData<TData>;
  
  public nextId = 0;

  constructor(private readonly type: typeof BaseDatabaseData<TData>) {
    this.service = inject(type);
  }

  // create(itemsToCreate: Omit<BaseDatabaseModel<TData>, "id">[]) {
  //   const items = this.service.getItems();
  //   itemsToCreate.forEach(itemToCreate => {
  //     const newItem = {
  //       ...itemToCreate,
  //       id: this.nextId
  //     } as BaseDatabaseModel<TData>;
  //     items.push(newItem);
  //     this.nextId++;
  //   });
  //   this.service.setItems(items);
  // }

  readAll() {
    return structuredClone(this.service.getItems());
  }

  readById(id: number) {
    return this.readAll().find(item => item.metadata.id === id);
  }

  readByParentId(parentId: number) {
    return this.readAll().filter(item => {
      if (item.metadata.parentId === undefined) {
        return false;
      }
      return item.metadata.parentId === parentId;
    });
  }

  update(itemToUpdate: BaseDatabaseModel<TData>) {
    const items = this.readAll()
      .map(item => {
        if (item.metadata.id === itemToUpdate.metadata.id) {
          return itemToUpdate;
        }
        return item;
      });
    this.service.setItems(items);
  }

  delete(id: number) {
    const items = this.readAll().filter(item => item.metadata.id !== id);
    this.service.setItems(items);
  }
}