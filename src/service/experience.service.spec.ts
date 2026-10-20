import { TestBed } from '@angular/core/testing';

import { ExperienceService } from './experience.service';
import { providerStore } from '../store/provider/provider.store';

describe('Experience Service', () => {
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(ExperienceService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the isLoading value from the store correctly.', () => {
    service.getIsLoading().subscribe((isLoading) => {
      expect(isLoading).toBeFalsy();
    });
  });
});
