import { BaseApiModel } from '../../../api/model/base/base-api.model';
import { BaseStoreColumnModel } from '../../../store/model/base-store.model';

export interface DialogOverlayTriggerModel<TData> {
  id: 'read' | 'update';
  header: string;
  columns: BaseStoreColumnModel[];
  item: BaseApiModel<TData>;
}
