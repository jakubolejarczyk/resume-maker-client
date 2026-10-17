import { inject } from "@angular/core";

import { BaseDatabaseData } from "../data/base-database.data";

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

  // readById(id: number) {
  //   return this.readAll().find(item => item.metadata.id === id);
  // }

  // readByParentId(parentId: number) {
  //   return this.readAll().filter(item => {
  //     if (item.metadata.parentId === undefined) {
  //       return true;
  //     }
  //     return item.metadata.parentId === parentId;
  //   });
  // }

  // update(itemsToUpdate: BaseDatabaseModel<TData>[]) {
  //   const items = this.readAll()
  //     .map(item => itemsToUpdate.find(itemToUpdate => itemToUpdate.id === item.id) ?? item);
  //   this.service.setItems(items);
  // }

  // delete(id: number) {
  //   const items = this.readAll().filter(item => item.metadata.id !== id);
  //   this.service.setItems(items);
  // }
}