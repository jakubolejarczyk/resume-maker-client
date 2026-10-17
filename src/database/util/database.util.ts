import { expect } from 'vitest';

import { BaseDatabaseService } from '../service/base-database.service';
import { BaseDatabaseModel } from '../model/base/base-database.model';

export const messageCreate = (entity: string, id: number) => {
  return `Should correctly create ${entity} with id ${id}.`;
};

export const messageReadAll = (entity: string) => {
  return `Should correctly read all ${entity}.`;
};

export const messageReadById = (entity: string, id: number) => {
  return `Should correctly read ${entity} with id ${id}.`;
};

export const messageReadByParentId = (entity: string, parentId: number) => {
  return `Should correctly read ${entity} with parent id ${parentId}.`;
};

export const messageUpdate = (entity: string, id: number) => {
  return `Should correctly update ${entity} with id ${id}.`;
};

export const messageDelete = (entity: string, id: number) => {
  return `Should correctly delete ${entity} with id ${id}.`;
};

export const testCreate = <TData>(
  database: BaseDatabaseService<TData>,
  itemToCreate: BaseDatabaseModel<TData>,
  expected: BaseDatabaseModel<TData>[],
) => {
  database.create(itemToCreate);
  expect(database.readAll()).toEqual(expected);
};

export const testReadAll = <TData>(
  database: BaseDatabaseService<TData>,
  expected: BaseDatabaseModel<TData>[],
) => {
  expect(database.readAll()).toEqual(expected);
};

export const testReadById = <TData>(
  database: BaseDatabaseService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>,
) => {
  expect(database.readById(id)).toEqual(expected);
};

export const testReadByParentId = <TData>(
  database: BaseDatabaseService<TData>,
  parentId: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  expect(database.readByParentId(parentId)).toEqual(expected);
};

export const testUpdate = <TData>(
  database: BaseDatabaseService<TData>,
  itemToUpdate: BaseDatabaseModel<TData>,
) => {
  database.update(itemToUpdate);
  expect(database.readById(itemToUpdate.metadata.id)).toEqual(itemToUpdate);
};

export const testDelete = <TData>(
  database: BaseDatabaseService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  database.delete(id);
  expect(database.readAll()).toEqual(expected);
};
