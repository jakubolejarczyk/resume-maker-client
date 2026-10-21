import { TestBed } from '@angular/core/testing';
import { map, switchMap, tap } from 'rxjs';

import { ResumeService } from './resume.service';
import { providerStore } from '../store/provider/provider.store';
import { RESUME_0 } from '../database/const/resume-database.const';

describe('Resume Service', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(ResumeService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the status value from the store correctly for resumes.', () => {
    service.getStatus().subscribe((response) => {
      expect(response).toEqual({
        success: true,
        message: 'The items was read correctly.',
      });
    });
  });

  it('Should return the isLoading value from the store correctly for resumes.', () => {
    service.getIsLoading().subscribe((response) => {
      expect(response).toBeFalsy();
    });
  });

  it('Should return the items value from the store correctly for resumes.', () => {
    service.getItems().subscribe((response) => {
      expect(response).toEqual([RESUME_0]);
    });
  });

  it('Should return the selectedItem value from the store correctly for resumes.', () => {
    service.getSelectedItem().subscribe((response) => {
      expect(response).toBeUndefined();
    });
  });

  it('Should return the columns value from the store correctly for resumes.', () => {
    service.getColumns().subscribe((response) => {
      expect(response).toEqual([
        {
          id: 'name',
          label: 'Name',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'jobTitle',
          label: 'Job title',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'summary',
          label: 'Summary',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
      ]);
    });
  });

  it('Should correctly select the item with id 0 for resumes.', () => {
    service
      .select(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            {
              ...RESUME_0,
              metadata: { ...RESUME_0.metadata, isSelected: true },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly deselect the item with id 0 for resumes.', () => {
    service
      .deselect(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([RESUME_0])),
      )
      .subscribe();
  });

  it('Should correctly create the new item for resumes.', () => {
    service
      .create(0, {
        name: 'aaa',
        jobTitle: 'bbb',
        summary: 'ccc',
      })
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            RESUME_0,
            {
              data: {
                name: 'aaa',
                jobTitle: 'bbb',
                summary: 'ccc',
              },
              metadata: {
                id: 1,
                parentId: 0,
                order: 1,
                isSelected: false,
              },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly read the item by id for resumes.', () => {
    service
      .readById(0)
      .pipe(tap((item) => expect(item).toEqual(RESUME_0)))
      .subscribe();
  });

  it('Should correctly read the items by parent id for resumes.', () => {
    service
      .readByParentId(0)
      .pipe(
        switchMap(() => service.getItems()),
        tap((items) => expect(items).toEqual([RESUME_0])),
      )
      .subscribe();
  });

  it('Should correctly update the new item for resumes.', () => {
    const RESUME_0_CLONE = structuredClone(RESUME_0);
    RESUME_0_CLONE.data.jobTitle = 'aaa';
    service
      .update(1, RESUME_0_CLONE.data)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([RESUME_0_CLONE])),
      )
      .subscribe();
  });
});
