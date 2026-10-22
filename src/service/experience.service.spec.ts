import { TestBed } from '@angular/core/testing';
import { map, switchMap, tap } from 'rxjs';

import { ExperienceService } from './experience.service';
import { providerStore } from '../store/provider/provider.store';
import {
  EXPERIENCE_0,
  EXPERIENCE_1,
} from '../database/const/experience-database.const';

describe('Experience Service', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(ExperienceService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the status value from the store correctly for experiences.', () => {
    service.getStatus().subscribe((response) => {
      expect(response).toEqual({
        success: true,
        message: 'The items was read correctly.',
      });
    });
  });

  it('Should return the isLoading value from the store correctly for experiences.', () => {
    service.getIsLoading().subscribe((response) => {
      expect(response).toBeFalsy();
    });
  });

  it('Should return the items value from the store correctly for experiences.', () => {
    service.getItems().subscribe((response) => {
      expect(response).toEqual([EXPERIENCE_0, EXPERIENCE_1]);
    });
  });

  it('Should return the selectedItem value from the store correctly for experiences.', () => {
    service.getSelectedItem().subscribe((response) => {
      expect(response).toBeUndefined();
    });
  });

  it('Should return the columns value from the store correctly for experiences.', () => {
    service.getColumns().subscribe((response) => {
      expect(response).toEqual([
        {
          id: 'company',
          label: 'Company',
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
          id: 'description',
          label: 'Description',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: true,
        },
        {
          id: 'startDate',
          label: 'Start date',
          isVisible: true,
          isEditable: true,
          type: 'date',
          isArray: false,
        },
        {
          id: 'endDate',
          label: 'End date',
          isVisible: true,
          isEditable: true,
          type: 'date',
          isArray: false,
        },
      ]);
    });
  });

  it('Should correctly select the item with id 1 for experiences.', () => {
    service
      .select(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            EXPERIENCE_0,
            {
              ...EXPERIENCE_1,
              metadata: { ...EXPERIENCE_1.metadata, isSelected: true },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly deselect the item with id 1 for experiences.', () => {
    service
      .deselect(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([EXPERIENCE_0, EXPERIENCE_1])),
      )
      .subscribe();
  });

  it('Should correctly create the new item for experiences.', () => {
    service
      .create(0, {
        company: 'aaa',
        jobTitle: 'bbb',
        description: ['a', 'b', 'c'],
        startDate: 'aaa',
        endDate: 'bbb',
      })
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            EXPERIENCE_0,
            EXPERIENCE_1,
            {
              data: {
                company: 'aaa',
                jobTitle: 'bbb',
                description: ['a', 'b', 'c'],
                startDate: 'aaa',
                endDate: 'bbb',
              },
              metadata: {
                id: 2,
                parentId: 0,
                order: 2,
                isSelected: false,
              },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly read the item by id for experiences.', () => {
    service
      .readById(1)
      .pipe(tap((item) => expect(item).toEqual(EXPERIENCE_1)))
      .subscribe();
  });

  it('Should correctly read the items by parent id for experiences.', () => {
    service
      .readByParentId(0)
      .pipe(
        switchMap(() => service.getItems()),
        tap((items) => expect(items).toEqual([EXPERIENCE_0, EXPERIENCE_1])),
      )
      .subscribe();
  });

  it('Should correctly update the new item for experiences.', () => {
    const EXPERIENCE_0_CLONE = structuredClone(EXPERIENCE_0);
    EXPERIENCE_0_CLONE.data.jobTitle = 'aaa';
    service
      .update(0, EXPERIENCE_0_CLONE.data)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([EXPERIENCE_0_CLONE, EXPERIENCE_1]),
        ),
      )
      .subscribe();
  });

  it('Should correctly delete the item for experiences.', () => {
    service
      .delete(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            {
              ...EXPERIENCE_1,
              metadata: { ...EXPERIENCE_1.metadata, order: 0 },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly move up the item for experiences.', () => {
    service
      .moveUp(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            {
              ...EXPERIENCE_1,
              metadata: { ...EXPERIENCE_1.metadata, order: 0 },
            },
            {
              ...EXPERIENCE_0,
              metadata: { ...EXPERIENCE_0.metadata, order: 1 },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly move down the item for experiences.', () => {
    service
      .moveDown(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            {
              ...EXPERIENCE_1,
              metadata: { ...EXPERIENCE_1.metadata, order: 0 },
            },
            {
              ...EXPERIENCE_0,
              metadata: { ...EXPERIENCE_0.metadata, order: 1 },
            },
          ]),
        ),
      )
      .subscribe();
  });
});
