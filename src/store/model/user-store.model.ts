import { UserDataApiModel } from '../../api/model/data/user-data-api.model';
import { BaseStoreModel } from './base-store.model';

export type UserStoreModel = BaseStoreModel<UserDataApiModel>;
