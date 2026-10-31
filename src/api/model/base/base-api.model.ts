export interface BaseApiModel<TData> {
  data: TData;
  metadata: {
    id: number;
    parentId: number | null;
    order: number;
    isSelected: boolean;
  };
}
