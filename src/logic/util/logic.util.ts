import { expect } from "vitest";
import { BaseLogicService } from "../service/base-logic.service";
import { BaseDatabaseModel } from "../../database/model/base/base-database.model";
import { BaseDatabaseService } from "../../database/service/base-database.service";

export const messageSelect = (entity: string, id: number) => {
    return `Should correctly select ${entity} with id ${id}.`;
};

export const messageDeselect = (entity: string, id: number) => {
    return `Should correctly deselect ${entity} with id ${id}.`;
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
    expected: BaseDatabaseModel<TData>[]
) => {
    logic.select(id);
    expect(database.readAll()).toEqual(expected);
};

export const testDeselect = <TData>(
    database: BaseDatabaseService<TData>,
    logic: BaseLogicService<TData>,
    id: number,
    expected: BaseDatabaseModel<TData>[]
) => {
    logic.select(id);
    logic.deselect(id);
    expect(database.readAll()).toEqual(expected);
};

export const testDelete = <TData>(
    database: BaseDatabaseService<TData>,
    logic: BaseLogicService<TData>,
    id: number,
    expected: BaseDatabaseModel<TData>[]
) => {
    logic.delete(id);
    expect(database.readAll()).toEqual(expected);
};

export const testMoveUp = <TData>(
    database: BaseDatabaseService<TData>,
    logic: BaseLogicService<TData>,
    id: number,
    expected: BaseDatabaseModel<TData>[]
) => {
    logic.moveUp(id);
    expect(database.readAll()).toEqual(expected);
};

export const testMoveDown = <TData>(
    database: BaseDatabaseService<TData>,
    logic: BaseLogicService<TData>,
    id: number,
    expected: BaseDatabaseModel<TData>[]
) => {
    logic.moveDown(id);
    expect(database.readAll()).toEqual(expected);
};