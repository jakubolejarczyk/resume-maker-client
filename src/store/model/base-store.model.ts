import { BaseDatabaseModel } from '../../database/model/base/base-database.model';
import { ColumnType } from '../../type/column.type';

export interface BaseStoreColumnModel {
  id: string;
  label: string;
  isVisible: boolean;
  isEditable: boolean;
  type: ColumnType;
  isArray: boolean;
}

export interface BaseStoreModel<TItem> {
  success: boolean;
  message: string;
  isLoading: boolean;
  items: BaseDatabaseModel<TItem>[];
  selectedItem: TItem | undefined;
  columns: BaseStoreColumnModel[];
}
