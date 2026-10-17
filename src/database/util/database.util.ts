import { expect } from "vitest";

import { BaseDatabaseService } from "../service/base-database.service";
import { BaseDatabaseModel } from "../model/base/base-database.model";

export const messageReadAll = (entity: string) => {
    return `Should correctly read all ${entity}.`;
};

// export const messageReadById = (entity: string, id: number) => {
//     return `Should correctly read ${entity} by id ${id}.`;
// };

// export const messageDelete = (entity: string, id: number) => {
//     return `Should correctly delete ${entity} by ids ${id}.`;
// };

export const testReadAll = <TData>(service: BaseDatabaseService<TData>, expected: BaseDatabaseModel<TData>[]) => {
    expect(service.readAll()).toEqual(expected);
};

// export const testReadById = <TData>(service: BaseDatabaseService<TData>, data: BaseDatabaseData<TData>, id: number) => {
//     const received = service.readById(id);
//     const expected = data.getItems().find(item => item.metadata.id === id);
//     expect(received).toEqual(expected);
// };

// export const testDelete = <TData>(service: BaseDatabaseService<TData>, data: BaseDatabaseData<TData>, id: number) => {
//     const receivedBeforeDeletion = service.readById(id);
//     const expected = data.getItems().find(item => item.metadata.id === id);
//     expect(receivedBeforeDeletion).toEqual(expected);
//     service.delete(id);
//     const receivedAfterDeletion = service.readById(id);
//     expect(receivedAfterDeletion).not.toEqual(expected);
// };