import { TestBed } from '@angular/core/testing';

import { EducationService } from './education.service';
import { providerStore } from '../store/provider/provider.store';

describe('Education Service', () => {
  let service: EducationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(EducationService);
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

  it('Should return the selectedItem value from the store correctly.', () => {
    service.getSelectedItem().subscribe((response) => {
      expect(response).toBeUndefined();
    });
  });

  it('Should return the columns value from the store correctly.', () => {
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
});
