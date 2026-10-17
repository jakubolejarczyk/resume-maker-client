import { TestBed } from "@angular/core/testing";

import { UserDatabaseService } from "./user-database.service";
import { messageDelete, messageReadAll, testDelete, testReadAll } from "../util/database.util";
import { USER_0 } from "../const/user-database.const";

describe("User Database Service", () => {
  let service: UserDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(UserDatabaseService);
  });

  // it("Should correctly create new users.", () => {
  //   const ids = [1, 2];
  //   service.nextId = ids[0];
  //   const user_1: Omit<BaseDatabaseModel<UserDataDatabaseModel>, "id"> = {
  //     data: {
  //       firstName: "Jan",
  //       lastName: "Nowak",
  //       phoneNumber: "+48 600 111 222",
  //       email: "jan.nowak@example.com",
  //       city: "Warsaw",
  //       country: "Poland",
  //       links: [
  //         "jan-nowak.example.com",
  //         "linkedin.com/in/jan-nowak",
  //         "github.com/jan-nowak",
  //         "leetcode.com/u/JanNowak"
  //       ]
  //     },
  //     metadata: {
  //       order: 1,
  //       isSelected: false
  //     }
  //   };
  //   const user_2: Omit<BaseDatabaseModel<UserDataDatabaseModel>, "id"> = {
  //     data: {
  //       firstName: "Anna",
  //       lastName: "Kowalska",
  //       phoneNumber: "+48 601 222 333",
  //       email: "anna.kowalska@example.com",
  //       city: "Krakow",
  //       country: "Poland",
  //       links: [
  //         "anna-kowalska.example.com",
  //         "linkedin.com/in/anna-kowalska",
  //         "github.com/anna-kowalska"
  //       ]
  //     },
  //     metadata: {
  //       order: 2,
  //       isSelected: false
  //     }
  //   };
  //   service.create([user_1, user_2]);
  //   expect(service.readByIds(ids)).toEqual([
  //     data.items[ids[0]],
  //     data.items[ids[1]]
  //   ]);
  // });

  // it("Should correctly read user by parent ids 0.", () => {
  //   const parentIds = [0];
  //   expect(service.readByParentIds(parentIds)).toEqual(data.items);
  // });

  // it("Should correctly update user with id 0.", () => {
  //   const ids = [0];
  //   expect(service.readByIds(ids)).toEqual(data.items);
  //   const itemsClone = structuredClone(data.items);
  //   itemsClone[ids[0]].data.city = "Warsaw";
  //   service.update([itemsClone[ids[0]]]);
  //   expect(service.readByIds(ids)).toEqual(itemsClone);
  // });
  
  it(messageReadAll("users"), () => testReadAll(service, [USER_0]));

  // it(messageReadById("user", 0), () => testReadById(service, data, 0));

  it(messageDelete("user", 0), () => testDelete(service, 0, []));
});