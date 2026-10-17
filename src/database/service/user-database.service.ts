import { Service } from '@angular/core';

import { BaseDatabaseService } from './base-database.service';
import { UserDataDatabaseModel } from '../model/data/user-data-database.model';
import { UserDatabaseData } from '../data/user-database.data';

@Service()
export class UserDatabaseService extends BaseDatabaseService<UserDataDatabaseModel> {
  constructor() {
    super(UserDatabaseData);
  }
}
