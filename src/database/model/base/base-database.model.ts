export interface BaseDatabaseModel<TData> {
    id: number;
    data: TData;
    metadata: {
        parentId?: number;
        order: number;
        isSelected: boolean;
    }
}