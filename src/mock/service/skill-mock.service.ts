import { Injectable } from '@angular/core';

import { BaseMockService } from './base-mock.service';
import { SkillStoreDatabaseMockAction } from '../database/store/action/skill-store-database-mock.action';
import { SkillDatabaseMockModel } from '../database/model/skill-database-mock.model';
import { SkillStoreDatabaseMockState } from '../../database/service/skill-database.service';

@Injectable({ providedIn: 'root' })
export class SkillMockService extends BaseMockService<SkillDatabaseMockModel> {
  constructor() {
    super(
      SkillStoreDatabaseMockState.getItems,
      SkillStoreDatabaseMockAction.DeleteByIds,
      SkillStoreDatabaseMockAction.DeleteByParentIds,
    );
  }
}
