import { expect } from "vitest";

import { BaseDatabaseService } from "../service/base-database.service";
import { BaseDatabaseData } from "../data/base-database.data";

export const messageReadAll = (entity: string) => {
    return `Should correctly read all ${entity}.`;
};

export const messageReadByIds = (entity: string, ids: number[]) => {
    return `Should correctly read ${entity} by ids ${ids.join(",")}.`;
};

export const messageDelete = (entity: string, ids: number[]) => {
    return `Should correctly delete ${entity} by ids ${ids.join(",")}.`;
};

export const testReadByIds = <TData>(service: BaseDatabaseService<TData>, data: BaseDatabaseData<TData>, ids: number[]) => {
    const expectedBefore = structuredClone(data.items)
        .filter(item => ids.includes(item.id));
    expect(service.readByIds(ids)).toEqual(expectedBefore);
};

export const testReadAll = <TData>(service: BaseDatabaseService<TData>, data: BaseDatabaseData<TData>) => {
    expect(service.readAll()).toEqual(structuredClone(data.items));
};

export const testDelete = <TData>(service: BaseDatabaseService<TData>, data: BaseDatabaseData<TData>, ids: number[]) => {
    const expectedBefore = structuredClone(data.items)
        .filter(item => ids.includes(item.id));
    expect(service.readByIds(ids)).toEqual(expectedBefore);
    service.delete(ids);
    expect(service.readByIds(ids)).toEqual([]);
};