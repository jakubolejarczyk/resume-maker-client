import { BaseDatabaseMockModel } from '../../model/base-database-mock.model';

export interface BaseStoreDatabaseMockModel<
  TItem extends BaseDatabaseMockModel,
> {
  items: TItem[];
}
