import { TestBed } from '@angular/core/testing';
import { map, switchMap } from 'rxjs';

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

  it('Should return the status value from the store correctly.', () => {
    service.getStatus().subscribe((response) => {
      expect(response).toEqual({
        success: true,
        message: 'The items was read correctly.',
      });
    });
  });

  it('Should return the isLoading value from the store correctly.', () => {
    service.getIsLoading().subscribe((response) => {
      expect(response).toBeFalsy();
    });
  });

  it('Should return the items value from the store correctly.', () => {
    service.getItems().subscribe((response) => {
      expect(response).toEqual([EXPERIENCE_0, EXPERIENCE_1]);
    });
  });

  it('Should return the selectedItem value from the store correctly.', () => {
    service.getSelectedItem().subscribe((response) => {
      expect(response).toBeUndefined();
    });
  });

  it('Should return the columns value from the store correctly.', () => {
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

  it('Should correctly select the item with id 1.', () => {
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

  it('Should correctly deselect the item with id 1.', () => {
    service
      .deselect(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([EXPERIENCE_0, EXPERIENCE_1])),
      )
      .subscribe();
  });
});
