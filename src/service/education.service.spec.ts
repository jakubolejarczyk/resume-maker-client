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

  it('Should return the isLoading value from the store correctly.', () => {
    service.getIsLoading().subscribe((isLoading) => {
      expect(isLoading).toBeFalsy();
    });
  });
});
