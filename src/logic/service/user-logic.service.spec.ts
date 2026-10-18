import { TestBed } from '@angular/core/testing';

import { UserLogicService } from './user-logic.service';
import { UserDatabaseService } from '../../database/service/user-database.service';
import * as util from '../util/logic.util';
import { USER_0 } from '../../database/const/user-database.const';
import { UserDataDatabaseModel } from '../../database/model/data/user-data-database.model';

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
    util.testCreate(logic, undefined, USER_1_DATA, {
      success: true,
      message: 'The item was created correctly.',
      body: undefined,
    });
  });

  it(util.messageReadById(true, 'user', 0), () =>
    util.testReadById(logic, 0, {
      success: true,
      message: 'The item was read correctly.',
      body: USER_0,
    }),
  );

  it(util.messageReadById(false, 'user', 10), () =>
    util.testReadById(logic, 10, {
      success: false,
      message: 'Failed to read the item.',
      body: undefined,
    }),
  );

  it(util.messageReadByParentId(true, 'users', 'undefined'), () =>
    util.testReadByParentId(logic, undefined, {
      success: true,
      message: 'The items was read correctly.',
      body: [USER_0],
    }),
  );

  it(util.messageReadByParentId(true, 'users', 10), () =>
    util.testReadByParentId(logic, 10, {
      success: false,
      message: 'The list of items is empty.',
      body: [],
    }),
  );

  it(util.messageUpdate(true, 'user', 0), () => {
    const USER_0_UPDATED = structuredClone(USER_0);
    USER_0_UPDATED.data.city = 'Warsaw';
    util.testUpdate(logic, 0, USER_0_UPDATED.data, {
      success: true,
      message: 'The item was updated correctly.',
      body: undefined,
    });
  });

  it(util.messageUpdate(false, 'user', 10), () => {
    const USER_10_UPDATED = structuredClone(USER_0);
    USER_10_UPDATED.metadata.id = 10;
    USER_10_UPDATED.data.city = 'Warsaw';
    util.testUpdate(logic, 10, USER_10_UPDATED.data, {
      success: false,
      message: 'Failed to update the item because it does not exist.',
      body: undefined,
    });
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
