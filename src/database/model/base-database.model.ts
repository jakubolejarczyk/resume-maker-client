export interface BaseDatabaseModel {
    id: number;
    order: number;
    isSelected: boolean;
    hasParent: boolean;
    parentId?: number;
}