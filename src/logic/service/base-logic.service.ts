import { inject } from '@angular/core';

import { BaseDatabaseService } from '../../database/service/base-database.service';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';
import { ResponseLogicModel } from '../model/response-logic.model';

export class BaseLogicService<TData> {
  private readonly service: BaseDatabaseService<TData>;

  private nextId: number;

  constructor(private readonly type: typeof BaseDatabaseService<TData>) {
    this.service = inject(type);
    this.nextId = this.service.getItems().length;
  }

  select(id: number) {
    const itemToSelect = this.service.readById(id);
    if (itemToSelect === undefined) return;
    const items =
      itemToSelect.metadata.parentId === undefined
        ? this.service.readAll()
        : this.service.readByParentId(itemToSelect.metadata.parentId);
    items.forEach((item) => {
      if (item.metadata.id === itemToSelect.metadata.id) {
        item.metadata.isSelected = true;
      } else {
        item.metadata.isSelected = false;
      }
      this.service.update(item);
    });
  }

  deselect(id: number) {
    const itemToDeselect = this.service.readById(id);
    if (itemToDeselect === undefined) return;
    itemToDeselect.metadata.isSelected = false;
    this.service.update(itemToDeselect);
  }

  create(parentId: number | undefined, data: TData) {
    const items =
      parentId === undefined
        ? this.service.readAll()
        : this.service.readByParentId(parentId);
    const lastOrder = items.reduce((acc: number, curr) => {
      if (curr.metadata.order > acc) {
        acc = curr.metadata.order;
      }
      return acc;
    }, 0);
    const itemToCreate: BaseDatabaseModel<TData> = {
      data,
      metadata: {
        id: this.nextId,
        parentId,
        order: lastOrder + 1,
        isSelected: false,
      },
    };
    this.nextId++;
    this.service.create(itemToCreate);
  }

  readById(id: number): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const item = this.service.readById(id);
    if (item === undefined) {
      return {
        success: false,
        message: "Failed to read the item.",
        body: undefined
      };
    }
    return {
      success: true,
      message: "The item was read correctly.",
      body: item
    };
  }

  readByParentId(parentId: number | undefined): ResponseLogicModel<BaseDatabaseModel<TData>[]> {
    const items = parentId === undefined
      ? this.service.readAll()
      : this.service.readByParentId(parentId);
    if (items.length === 0) {
      return {
        success: false,
        message: "The list of items is empty.",
        body: []
      };
    }
    return {
      success: true,
      message: "The items was read correctly.",
      body: items
    };
  }

  update(id: number, data: TData) {
    const itemToUpdate = this.service.readById(id);
    if (itemToUpdate === undefined) return;
    itemToUpdate.data = structuredClone(data);
    this.service.update(itemToUpdate);
  }

  delete(id: number) {
    const itemToDelete = this.service.readById(id);
    if (itemToDelete === undefined) return;
    const { parentId } = itemToDelete.metadata;
    this.service.delete(itemToDelete.metadata.id);
    const itemsToUpdate =
      parentId === undefined
        ? this.service.readAll()
        : this.service.readByParentId(parentId);
    itemsToUpdate
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((itemToUpdate, index) => {
        itemToUpdate.metadata.order = index;
        return itemToUpdate;
      })
      .forEach((itemToUpdate) => this.service.update(itemToUpdate));
  }

  moveUp(id: number) {
    const itemToMoveUp = this.service.readById(id);
    if (itemToMoveUp === undefined) return;
    if (itemToMoveUp.metadata.order === 0) return;
    const items =
      itemToMoveUp.metadata.parentId === undefined
        ? this.service.readAll()
        : this.service.readByParentId(itemToMoveUp.metadata.parentId);
    const prevItem = items.find(
      (item) => item.metadata.order === itemToMoveUp.metadata.order - 1,
    );
    if (prevItem === undefined) return;
    const itemToMoveUpOrder = itemToMoveUp.metadata.order;
    itemToMoveUp.metadata.order = prevItem.metadata.order;
    prevItem.metadata.order = itemToMoveUpOrder;
    this.service.update(itemToMoveUp);
    this.service.update(prevItem);
  }

  moveDown(id: number) {
    const itemToMoveDown = this.service.readById(id);
    if (itemToMoveDown === undefined) return;
    const items =
      itemToMoveDown.metadata.parentId === undefined
        ? this.service.readAll()
        : this.service.readByParentId(itemToMoveDown.metadata.parentId);
    const lastOrder = items.reduce((acc: number, curr) => {
      if (curr.metadata.order > acc) {
        acc = curr.metadata.order;
      }
      return acc;
    }, 0);
    if (itemToMoveDown.metadata.order === lastOrder) return;
    const nextItem = items.find(
      (item) => item.metadata.order === itemToMoveDown.metadata.order + 1,
    );
    if (nextItem === undefined) return;
    const itemToMoveDownOrder = itemToMoveDown.metadata.order;
    itemToMoveDown.metadata.order = nextItem.metadata.order;
    nextItem.metadata.order = itemToMoveDownOrder;
    this.service.update(itemToMoveDown);
    this.service.update(nextItem);
  }
}
