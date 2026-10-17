export interface BaseApiModel<TData> {
  data: TData;
  metadata: {
    id: number;
    parentId?: number;
    order: number;
    isSelected: boolean;
  };
}
