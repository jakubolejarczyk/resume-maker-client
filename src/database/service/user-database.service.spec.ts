import { TestBed } from "@angular/core/testing";

import { UserDatabaseService } from "./user-database.service";
import { UserDatabaseConst } from "../const/user-database.const";
import { UserDatabaseModel } from "../model/user-database.model";

describe("User Database Service", () => {
  let service: UserDatabaseService;

  beforeEach(() => {
    service = TestBed.inject(UserDatabaseService);
  });

  it("Should correctly create new users.", () => {
    service.nextId = 2;
    const USER_TEST_2: UserDatabaseModel = {
      id: 2,
      order: 2,
      isSelected: false,
      hasParent: false,
      firstName: "Jan",
      lastName: "Nowak",
      jobTitle: "Frontend Developer",
      phoneNumber: "+48 600 111 222",
      email: "jan.nowak@example.com",
      city: "Warsaw",
      country: "Poland",
      links: [
          "jan-nowak.example.com",
          "linkedin.com/in/jan-nowak",
          "github.com/jan-nowak",
          "leetcode.com/u/JanNowak"
      ],
      summary: "Frontend Developer with 3+ years of experience building responsive and accessible web applications using React, TypeScript, and modern CSS. Experienced in REST API integration, reusable component development, and frontend performance optimization. Focused on clean code, maintainable architecture, and delivering intuitive user experiences."
    };
    const USER_TEST_3: UserDatabaseModel = {
      id: 3,
      order: 3,
      isSelected: false,
      hasParent: false,
      firstName: "Maria",
      lastName: "Wiśniewska",
      jobTitle: "Backend Developer",
      phoneNumber: "+48 700 222 333",
      email: "maria.wisniewska@example.com",
      city: "Wroclaw",
      country: "Poland",
      links: [
          "maria-wisniewska.example.com",
          "linkedin.com/in/maria-wisniewska",
          "github.com/maria-wisniewska",
          "leetcode.com/u/MariaWisniewska"
      ],
      summary: "Backend Developer with 5+ years of experience designing and implementing scalable server-side applications using C#, .NET, and SQL databases. Experienced in building RESTful APIs, optimizing database queries, implementing authentication and authorization, and writing automated tests. Committed to reliable systems, clean architecture, and efficient software delivery."
    };
    service.create([
      USER_TEST_2,
      USER_TEST_3
    ]);
    const received = service.readByIds([2, 3]);
    expect(received).toEqual([
      USER_TEST_2,
      USER_TEST_3
    ]);
  });

  it("Should correctly read users by ids 0, 1.", () => {
    const ids = [0, 1];
    const received = service.readByIds(ids);
    expect(received).toEqual([
      UserDatabaseConst.USER_PERSONAL_0,
      UserDatabaseConst.USER_TEST_1
    ]);
  });

  it("Should correctly read users by parent ids 0, 1.", () => {
    const parentIds = [0, 1];
    const received = service.readByParentIds(parentIds);
    expect(received).toEqual([
      UserDatabaseConst.USER_PERSONAL_0,
      UserDatabaseConst.USER_TEST_1
    ]);
  });

  it("Should correctly update users with ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      UserDatabaseConst.USER_PERSONAL_0,
      UserDatabaseConst.USER_TEST_1
    ]);
    const USER_PERSONAL_0_UPDATED = structuredClone(UserDatabaseConst.USER_PERSONAL_0);
    const USER_TEST_1_UPDATED = structuredClone(UserDatabaseConst.USER_TEST_1);
    USER_PERSONAL_0_UPDATED.city = "Cracow";
    USER_TEST_1_UPDATED.city = "Warsaw";
    service.update([
      USER_PERSONAL_0_UPDATED,
      USER_TEST_1_UPDATED
    ]);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([
      USER_PERSONAL_0_UPDATED,
      USER_TEST_1_UPDATED
    ]);
  });

  it("Should correctly delete users by ids 0, 1.", () => {
    const ids = [0, 1];
    const receivedBefore = service.readByIds(ids);
    expect(receivedBefore).toEqual([
      UserDatabaseConst.USER_PERSONAL_0,
      UserDatabaseConst.USER_TEST_1
    ]);
    service.delete(ids);
    const receivedAfter = service.readByIds(ids);
    expect(receivedAfter).toEqual([]);
  });
});