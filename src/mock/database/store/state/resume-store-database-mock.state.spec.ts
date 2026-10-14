import { provideStore, Store } from "@ngxs/store";
import { TestBed } from "@angular/core/testing";
import { switchMap, tap } from "rxjs";

import { ResumeStoreDatabaseMockState } from "./resume-store-database-mock.state";
import { ResumeStoreDatabaseMockAction } from "../action/resume-store-database-mock.action";

describe("Resume Database Mock Store", () => {
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore([ResumeStoreDatabaseMockState])
      ]
    });
    store = TestBed.inject(Store);
  });

  it("Should correctly delete the resume with id equal to 0.", () => {
    store.dispatch(new ResumeStoreDatabaseMockAction.DeleteByIds([0])).pipe(
      switchMap(() => store.select(ResumeStoreDatabaseMockState.getResumes)),
      tap((resumes) => expect(resumes).toEqual([]))
    ).subscribe();
  });

  it("Should correctly delete resumes with resume id equal to 0.", () => {
    store.dispatch(new ResumeStoreDatabaseMockAction.DeleteByUserIds([0])).pipe(
      switchMap(() => store.select(ResumeStoreDatabaseMockState.getResumes)),
      tap((resumes) => expect(resumes).toEqual([]))
    ).subscribe();
  });
});