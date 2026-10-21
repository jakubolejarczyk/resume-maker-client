import { TestBed } from '@angular/core/testing';
import { map, switchMap, tap } from 'rxjs';

import { EducationService } from './education.service';
import { providerStore } from '../store/provider/provider.store';
import {
  EDUCATION_0,
  EDUCATION_1,
} from '../database/const/education-database.const';

describe('Education Service', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(EducationService);
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
      expect(response).toEqual([EDUCATION_0, EDUCATION_1]);
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
          id: 'institutionName',
          label: 'Institution name',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'fieldOfStudy',
          label: 'Field of study',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'degree',
          label: 'Degree',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'startYear',
          label: 'Start year',
          isVisible: true,
          isEditable: true,
          type: 'number',
          isArray: false,
        },
        {
          id: 'endYear',
          label: 'End year',
          isVisible: true,
          isEditable: true,
          type: 'number',
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
            EDUCATION_0,
            {
              ...EDUCATION_1,
              metadata: { ...EDUCATION_1.metadata, isSelected: true },
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
        map((items) => expect(items).toEqual([EDUCATION_0, EDUCATION_1])),
      )
      .subscribe();
  });

  it('Should correctly create the new item for experiences.', () => {
    service
      .create(0, {
        institutionName: 'a',
        fieldOfStudy: 'b',
        degree: 'c',
        startYear: 1,
        endYear: 2,
      })
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            EDUCATION_0,
            EDUCATION_1,
            {
              data: {
                institutionName: 'a',
                fieldOfStudy: 'b',
                degree: 'c',
                startYear: 1,
                endYear: 2,
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
      .pipe(tap((item) => expect(item).toEqual(EDUCATION_1)))
      .subscribe();
  });

  it('Should correctly read the items by parent id for educations.', () => {
    service
      .readByParentId(0)
      .pipe(
        switchMap(() => service.getItems()),
        tap((items) => expect(items).toEqual([EDUCATION_0, EDUCATION_1])),
      )
      .subscribe();
  });

  it('Should correctly update the new item for educations.', () => {
    const EDUCATION_0_CLONE = structuredClone(EDUCATION_0);
    EDUCATION_0_CLONE.data.institutionName = 'aaa';
    service
      .update(0, EDUCATION_0_CLONE.data)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([EDUCATION_0_CLONE, EDUCATION_1])),
      )
      .subscribe();
  });

  it('Should correctly delete the item for educations.', () => {
    service
      .delete(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([EDUCATION_0])),
      )
      .subscribe();
  });

  it('Should correctly move up the item for educations.', () => {
    service
      .moveUp(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 1 } },
            { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 0 } },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly move down the item for educations.', () => {
    service
      .moveDown(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            { ...EDUCATION_0, metadata: { ...EDUCATION_0.metadata, order: 1 } },
            { ...EDUCATION_1, metadata: { ...EDUCATION_1.metadata, order: 0 } },
          ]),
        ),
      )
      .subscribe();
  });
});
