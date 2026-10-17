type BaseStoreColumnTypeModel = 'string' | 'string[]' | 'number' | 'date';

export interface BaseStoreColumnModel {
  id: string;
  label: string;
  isVisible: boolean;
  isEditable: boolean;
  type: BaseStoreColumnTypeModel;
}

export interface BaseStoreModel<TItem> {
  success: boolean;
  message: string;
  isLoading: boolean;
  items: TItem[];
  selectedItem: TItem | undefined;
  columns: BaseStoreColumnModel[];
}
