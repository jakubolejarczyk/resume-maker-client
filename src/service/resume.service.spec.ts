import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume.service';
import { providerStore } from '../store/provider/provider.store';

describe('Resume Service', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(ResumeService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the isLoading value from the store correctly.', () => {
    service.getIsLoading().subscribe((isLoading) => {
      expect(isLoading).toBeFalsy();
    });
  });
});
