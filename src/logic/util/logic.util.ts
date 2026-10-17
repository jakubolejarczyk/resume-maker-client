import { expect } from 'vitest';
import { BaseLogicService } from '../service/base-logic.service';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';
import { BaseDatabaseService } from '../../database/service/base-database.service';

export const messageSelect = (entity: string, id: number) => {
  return `Should correctly select ${entity} with id ${id}.`;
};

export const messageDeselect = (entity: string, id: number) => {
  return `Should correctly deselect ${entity} with id ${id}.`;
};

export const messageCreate = (entity: string) => {
  return `Should correctly create ${entity}.`;
};

export const messageReadById = (entity: string, id: number) => {
  return `Should correctly read ${entity} by id ${id}.`;
};

export const messageReadByParentId = (
  entity: string,
  parentId: number | 'undefined',
) => {
  return `Should correctly read ${entity} by parent id ${parentId}.`;
};

export const messageUpdate = (entity: string, id: number) => {
  return `Should correctly update ${entity} with id ${id}.`;
};

export const messageDelete = (entity: string, id: number) => {
  return `Should correctly delete ${entity} with id ${id}.`;
};

export const messageMoveUp = (entity: string, id: number) => {
  return `Should correctly move up ${entity} with id ${id}.`;
};

export const messageMoveDown = (entity: string, id: number) => {
  return `Should correctly move down ${entity} with id ${id}.`;
};

export const testSelect = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.select(id);
  expect(database.readAll()).toEqual(expected);
};

export const testDeselect = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.select(id);
  logic.deselect(id);
  expect(database.readAll()).toEqual(expected);
};

export const testCreate = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  parentId: number | undefined,
  data: TData,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.create(parentId, data);
  expect(database.readAll()).toEqual(expected);
};

export const testReadById = <TData>(
  logic: BaseLogicService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>,
) => {
  expect(logic.readById(id)).toEqual(expected);
};

export const testReadByParentId = <TData>(
  logic: BaseLogicService<TData>,
  parentId: number | undefined,
  expected: BaseDatabaseModel<TData>[],
) => {
  expect(logic.readByParentId(parentId)).toEqual(expected);
};

export const testUpdate = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  id: number,
  data: TData,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.update(id, data);
  expect(database.readAll()).toEqual(expected);
};

export const testDelete = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.delete(id);
  expect(database.readAll()).toEqual(expected);
};

export const testMoveUp = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.moveUp(id);
  expect(database.readAll()).toEqual(expected);
};

export const testMoveDown = <TData>(
  database: BaseDatabaseService<TData>,
  logic: BaseLogicService<TData>,
  id: number,
  expected: BaseDatabaseModel<TData>[],
) => {
  logic.moveDown(id);
  expect(database.readAll()).toEqual(expected);
};
