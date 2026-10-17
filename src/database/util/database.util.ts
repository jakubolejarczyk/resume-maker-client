import { expect } from "vitest";

import { BaseDatabaseService } from "../service/base-database.service";
import { BaseDatabaseModel } from "../model/base/base-database.model";

export const messageReadAll = (entity: string) => {
    return `Should correctly read all ${entity}.`;
};

export const messageReadById = (entity: string, id: number) => {
    return `Should correctly read ${entity} with id ${id}.`;
};

export const messageDelete = (entity: string, id: number) => {
    return `Should correctly delete ${entity} with id ${id}.`;
};

export const testReadAll = <TData>(service: BaseDatabaseService<TData>, expected: BaseDatabaseModel<TData>[]) => {
    expect(service.readAll()).toEqual(expected);
};

export const testReadById = <TData>(service: BaseDatabaseService<TData>, id: number, expected: BaseDatabaseModel<TData>) => {
    expect(service.readById(id)).toEqual(expected);
};

export const testDelete = <TData>(service: BaseDatabaseService<TData>, id: number, expected: BaseDatabaseModel<TData>[]) => {
    service.delete(id);
    expect(service.readAll()).toEqual(expected);
};