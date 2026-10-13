import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { SkillStoreDatabaseMockState } from "./skill-store-database-mock.state";
import { SkillStoreDatabaseMockAction } from "../action/skill-store-database-mock.action";
import { SKILL_1, SKILL_2, SKILL_3 } from "../../const/skill-database-mock.const";

describe("Skill Database Mock Store", () => {
    let store: Store;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          provideStore([SkillStoreDatabaseMockState])
        ]
      });
      store = TestBed.inject(Store);
    });

    it("Should correctly delete the skill with id 0.", () => {
      store.dispatch(new SkillStoreDatabaseMockAction.Delete(0)).pipe(
        switchMap(() => store.select(SkillStoreDatabaseMockState.getSkills)),
        tap((users) => expect(users).toEqual([SKILL_1, SKILL_2, SKILL_3]))
      ).subscribe();
    });
});