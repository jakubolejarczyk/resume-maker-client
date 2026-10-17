import { Service } from '@angular/core';

import { UserDataDatabaseModel } from '../model/data/user-data-database.model';
import { BaseDatabaseData } from './base-database.data';
import { USER_0 } from '../const/user-database.const';

@Service()
export class UserDatabaseData extends BaseDatabaseData<UserDataDatabaseModel> {
  constructor() {
    super([USER_0]);
  }
}
