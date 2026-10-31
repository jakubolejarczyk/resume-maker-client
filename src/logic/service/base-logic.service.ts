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

  select(id: number): ResponseLogicModel<BaseDatabaseModel<TData> | null> {
    const itemToSelect = this.service.readById(id);
    if (itemToSelect === undefined) {
      return {
        success: false,
        message: 'Failed to select the item because it does not exist.',
        body: null,
      };
    }
    const items =
      itemToSelect.metadata.parentId === null
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
    const currentItem = this.service.readById(id) || null;
    return {
      success: true,
      message: 'The item was selected correctly.',
      body: currentItem,
    };
  }

  deselect(
    id: number,
  ): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const itemToDeselect = this.service.readById(id);
    if (itemToDeselect === undefined) {
      return {
        success: false,
        message: 'Failed to deselect the item because it does not exist.',
        body: undefined,
      };
    }
    itemToDeselect.metadata.isSelected = false;
    this.service.update(itemToDeselect);
    return {
      success: true,
      message: 'The item was deselected correctly.',
      body: itemToDeselect,
    };
  }

  create(
    parentId: number | null,
    data: TData,
  ): ResponseLogicModel<BaseDatabaseModel<TData>> {
    const items =
      parentId === null
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
    return {
      success: true,
      message: 'The item was created correctly.',
      body: itemToCreate,
    };
  }

  readById(
    id: number,
  ): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const item = this.service.readById(id);
    if (item === undefined) {
      return {
        success: false,
        message: 'Failed to read the item.',
        body: undefined,
      };
    }
    return {
      success: true,
      message: 'The item was read correctly.',
      body: item,
    };
  }

  readByParentId(
    parentId: number | undefined,
  ): ResponseLogicModel<BaseDatabaseModel<TData>[]> {
    const items =
      parentId === undefined
        ? this.service.readAll()
        : this.service.readByParentId(parentId);
    if (items.length === 0) {
      return {
        success: false,
        message: 'The list of items is empty.',
        body: [],
      };
    }
    return {
      success: true,
      message: 'The items was read correctly.',
      body: items,
    };
  }

  update(
    id: number,
    data: TData,
  ): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const itemToUpdate = this.service.readById(id);
    if (itemToUpdate === undefined) {
      return {
        success: false,
        message: 'Failed to update the item because it does not exist.',
        body: undefined,
      };
    }
    itemToUpdate.data = structuredClone(data);
    this.service.update(itemToUpdate);
    return {
      success: true,
      message: 'The item was updated correctly.',
      body: itemToUpdate,
    };
  }

  delete(id: number): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const itemToDelete = this.service.readById(id);
    if (itemToDelete === undefined) {
      return {
        success: false,
        message: 'Failed to move up the item because it does not exist.',
        body: undefined,
      };
    }
    const { parentId } = itemToDelete.metadata;
    this.service.delete(itemToDelete.metadata.id);
    const itemsToUpdate =
      parentId === null
        ? this.service.readAll()
        : this.service.readByParentId(parentId);
    itemsToUpdate
      .sort((prev, next) => prev.metadata.order - next.metadata.order)
      .map((itemToUpdate, index) => {
        itemToUpdate.metadata.order = index;
        return itemToUpdate;
      })
      .forEach((itemToUpdate) => this.service.update(itemToUpdate));
    return {
      success: true,
      message: 'The item was deleted correctly.',
      body: itemToDelete,
    };
  }

  moveUp(id: number): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const itemToMoveUp = this.service.readById(id);
    if (itemToMoveUp === undefined) {
      return {
        success: false,
        message: 'Failed to move up the item because it does not exist.',
        body: undefined,
      };
    }
    if (itemToMoveUp.metadata.order === 0) {
      return {
        success: false,
        message: 'Failed to move up the item because it is the first element.',
        body: undefined,
      };
    }
    const items =
      itemToMoveUp.metadata.parentId === null
        ? this.service.readAll()
        : this.service.readByParentId(itemToMoveUp.metadata.parentId);
    const prevItem = items.find(
      (item) => item.metadata.order === itemToMoveUp.metadata.order - 1,
    );
    if (prevItem === undefined) {
      return {
        success: false,
        message:
          'Failed to move up the item because the previous item does not exist.',
        body: undefined,
      };
    }
    const itemToMoveUpOrder = itemToMoveUp.metadata.order;
    itemToMoveUp.metadata.order = prevItem.metadata.order;
    prevItem.metadata.order = itemToMoveUpOrder;
    this.service.update(itemToMoveUp);
    this.service.update(prevItem);
    return {
      success: true,
      message: 'The item was moved up correctly.',
      body: itemToMoveUp,
    };
  }

  moveDown(
    id: number,
  ): ResponseLogicModel<BaseDatabaseModel<TData> | undefined> {
    const itemToMoveDown = this.service.readById(id);
    if (itemToMoveDown === undefined) {
      return {
        success: false,
        message: 'Failed to move down the item because it does not exist.',
        body: undefined,
      };
    }
    const items =
      itemToMoveDown.metadata.parentId === null
        ? this.service.readAll()
        : this.service.readByParentId(itemToMoveDown.metadata.parentId);
    const lastOrder = items.reduce((acc: number, curr) => {
      if (curr.metadata.order > acc) {
        acc = curr.metadata.order;
      }
      return acc;
    }, 0);
    if (itemToMoveDown.metadata.order === lastOrder) {
      return {
        success: false,
        message: 'Failed to move down the item because it is the last element.',
        body: undefined,
      };
    }
    const nextItem = items.find(
      (item) => item.metadata.order === itemToMoveDown.metadata.order + 1,
    );
    if (nextItem === undefined) {
      return {
        success: false,
        message:
          'Failed to move down the item because the next item does not exist.',
        body: undefined,
      };
    }
    const itemToMoveDownOrder = itemToMoveDown.metadata.order;
    itemToMoveDown.metadata.order = nextItem.metadata.order;
    nextItem.metadata.order = itemToMoveDownOrder;
    this.service.update(itemToMoveDown);
    this.service.update(nextItem);
    return {
      success: true,
      message: 'The item was moved down correctly.',
      body: itemToMoveDown,
    };
  }
}
