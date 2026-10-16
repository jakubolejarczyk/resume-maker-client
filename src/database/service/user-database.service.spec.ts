import { TestBed } from "@angular/core/testing";

import { UserDatabaseService } from "./user-database.service";
import { UserDatabaseData } from "../data/user-database.data";
import { messageDelete, messageReadAll, messageReadByIds, testDelete, testReadAll, testReadByIds } from "../util/database.util";

describe("User Database Service", () => {
  const ids = [0];

  let service: UserDatabaseService;
  let data: UserDatabaseData;

  beforeEach(() => {
    service = TestBed.inject(UserDatabaseService);
    data = TestBed.inject(UserDatabaseData);
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
  
  it(messageReadAll("users"), () => testReadAll(service, data));

  it(messageReadByIds("users", ids), () => testReadByIds(service, data, ids));

  it(messageDelete("users", ids), () => testDelete(service, data, ids));
});