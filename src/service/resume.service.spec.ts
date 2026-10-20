import { TestBed } from '@angular/core/testing';

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
      expect(response).toEqual([RESUME_0]);
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
});
