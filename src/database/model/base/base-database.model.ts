export interface BaseDatabaseModel<TData> {
  data: TData;
  metadata: {
    id: number;
    parentId: number | null;
    order: number;
    isSelected: boolean;
  };
}
