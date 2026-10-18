import { TestBed } from '@angular/core/testing';

import { UserLogicService } from './user-logic.service';
import { UserDatabaseService } from '../../database/service/user-database.service';
import * as util from '../util/logic.util';
import { USER_0 } from '../../database/const/user-database.const';
import { UserDataDatabaseModel } from '../../database/model/data/user-data-database.model';
import { BaseDatabaseModel } from '../../database/model/base/base-database.model';

describe('User Logic Service', () => {
  let database: UserDatabaseService;
  let logic: UserLogicService;

  beforeEach(() => {
    database = TestBed.inject(UserDatabaseService);
    logic = TestBed.inject(UserLogicService);
  });

  it(util.messageSelect('user', 0), () =>
    util.testSelect(database, logic, 0, [
      { ...USER_0, metadata: { ...USER_0.metadata, isSelected: true } },
    ]),
  );

  it(util.messageDeselect('user', 0), () =>
    util.testDeselect(database, logic, 0, [USER_0]),
  );

  it(util.messageCreate('user'), () => {
    const USER_1_DATA: UserDataDatabaseModel = {
      firstName: 'Adam',
      lastName: 'Kowalski',
      phoneNumber: '+48 600 123 456',
      email: 'adam.kowalski@example.com',
      city: 'Kraków',
      country: 'Poland',
      links: [
        'adamkowalski.example.com',
        'linkedin.com/in/adam-kowalski-demo',
        'github.com/adam-kowalski-demo',
        'leetcode.com/u/AdamKowalskiDemo',
      ],
    };
    const USER_1: BaseDatabaseModel<UserDataDatabaseModel> = {
      data: structuredClone(USER_1_DATA),
      metadata: {
        id: 1,
        order: 1,
        isSelected: false,
      },
    };
    util.testCreate(database, logic, undefined, USER_1_DATA, [USER_0, USER_1]);
  });

  it(util.messageReadById(true, 'user', 0), () =>
    util.testReadById(logic, 0, {
      success: true,
      message: "The item was read correctly.",
      body: USER_0
    }),
  );

  it(util.messageReadById(false, 'user', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: "Failed to read the item.",
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'user', 'undefined'), () =>
    util.testReadByParentId(logic, undefined, {
      success: true,
      message: "The items was read correctly.",
      body: [USER_0]
    }),
  );

  it(util.messageUpdate('user', 0), () => {
    const USER_0_UPDATED = structuredClone(USER_0);
    USER_0_UPDATED.data.city = 'Warsaw';
    util.testUpdate(database, logic, 0, USER_0_UPDATED.data, [USER_0_UPDATED]);
  });

  it(util.messageDelete('user', 0), () =>
    util.testDelete(database, logic, 0, []),
  );

  it(util.messageMoveUp('user', 0), () =>
    util.testMoveUp(database, logic, 0, [USER_0]),
  );

  it(util.messageMoveDown('user', 0), () =>
    util.testMoveDown(database, logic, 0, [USER_0]),
  );
});
