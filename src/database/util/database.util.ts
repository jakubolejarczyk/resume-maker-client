import { expect } from "vitest";

import { BaseDatabaseService } from "../service/base-database.service";
import { BaseDatabaseData } from "../data/base-database.data";

export const messageDeleteItemsByIds = (entity: string, ids: number[]) => {
    return `Should correctly delete ${entity} by ids ${ids.join(",")}.`;
};

export const testDeleteItemsByIds = <TData>(ids: number[], service: BaseDatabaseService<TData>, data: BaseDatabaseData<TData>) => {
    const expectedBefore = structuredClone(data.items)
        .filter(item => ids.includes(item.id));
    expect(service.readByIds(ids)).toEqual(expectedBefore);
    service.delete(ids);
    expect(service.readByIds(ids)).toEqual([]);
};