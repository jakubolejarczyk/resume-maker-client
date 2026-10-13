import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { SkillMockService } from "./skill-mock.service";
import { SkillStoreDatabaseMockState } from "../database/store/state/skill-store-database-mock.state";
import { SKILL_1, SKILL_2, SKILL_3 } from "../database/const/skill-database-mock.const";

describe("Skill Mock Service", () => {
  let store: Store;
  let service: SkillMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([SkillStoreDatabaseMockState])
      ]
    });
    store = TestBed.inject(Store);
    service = TestBed.inject(SkillMockService);
  });

  it("Should correctly delete the skill with id 0.", () => {
    service.delete(0).pipe(
      switchMap(() => store.select(SkillStoreDatabaseMockState.getSkills)),
      tap((skills) => expect(skills).toEqual([SKILL_1, SKILL_2, SKILL_3]))
    ).subscribe();
  });
});