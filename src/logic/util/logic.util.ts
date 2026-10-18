import { expect } from 'vitest';
import { BaseLogicService } from '../service/base-logic.service';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';
import { BaseDatabaseService } from '../../database/service/base-database.service';
import { ResponseLogicModel } from '../model/response-logic.model';

const getMessageContext = (success: boolean) =>
  success ? 'correctly' : 'not correctly';

export const messageSelect = (success: boolean, entity: string, id: number) => {
  return `Should ${getMessageContext(success)} select ${entity} with id ${id}.`;
};

export const messageDeselect = (
  success: boolean,
  entity: string,
  id: number,
) => {
  return `Should ${getMessageContext(success)} deselect ${entity} with id ${id}.`;
};

export const messageCreate = (entity: string) => {
  return `Should correctly create ${entity}.`;
};

export const messageReadById = (
  success: boolean,
  entity: string,
  id: number,
) => {
  return `Should ${getMessageContext(success)} read ${entity} by id ${id}.`;
};

export const messageReadByParentId = (
  success: boolean,
  entity: string,
  parentId: number | 'undefined',
) => {
  return `Should ${getMessageContext(success)} read ${entity} by parent id ${parentId}.`;
};

export const messageUpdate = (success: boolean, entity: string, id: number) => {
  return `Should ${getMessageContext(success)} update ${entity} with id ${id}.`;
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
  logic: BaseLogicService<TData>,
  id: number,
  expected: ResponseLogicModel<undefined>,
) => {
  expect(logic.select(id)).toEqual(expected);
};

export const testDeselect = <TData>(
  logic: BaseLogicService<TData>,
  id: number,
  expected: ResponseLogicModel<undefined>,
) => {
  expect(logic.deselect(id)).toEqual(expected);
};

export const testCreate = <TData>(
  logic: BaseLogicService<TData>,
  parentId: number | undefined,
  data: TData,
  expected: ResponseLogicModel<undefined>,
) => {
  expect(logic.create(parentId, data)).toEqual(expected);
};

export const testReadById = <TData>(
  logic: BaseLogicService<TData>,
  id: number,
  expected: ResponseLogicModel<BaseDatabaseModel<TData> | undefined>,
) => {
  expect(logic.readById(id)).toEqual(expected);
};

export const testReadByParentId = <TData>(
  logic: BaseLogicService<TData>,
  parentId: number | undefined,
  expected: ResponseLogicModel<BaseDatabaseModel<TData>[]>,
) => {
  expect(logic.readByParentId(parentId)).toEqual(expected);
};

export const testUpdate = <TData>(
  logic: BaseLogicService<TData>,
  id: number,
  data: TData,
  expected: ResponseLogicModel<undefined>,
) => {
  expect(logic.update(id, data)).toEqual(expected);
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
