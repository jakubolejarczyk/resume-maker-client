import { expect } from "vitest";
import { BaseLogicService } from "../service/base-logic.service";
import { BaseDatabaseModel } from "../../database/model/base/base-database.model";
import { BaseDatabaseService } from "../../database/service/base-database.service";

export const messageSelect = (entity: string, id: number) => {
    return `Should correctly select ${entity} with id ${id}.`;
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