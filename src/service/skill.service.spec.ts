import { TestBed } from '@angular/core/testing';

import { SkillService } from './skill.service';
import { providerStore } from '../store/provider/provider.store';

describe('Skill Service', () => {
  let service: SkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(SkillService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the isLoading value from the store correctly.', () => {
    service.getIsLoading().subscribe((isLoading) => {
      expect(isLoading).toBeFalsy();
    });
  });
});
