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
          id: 'category',
          label: 'Category',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'skills',
          label: 'Skills',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: true,
        },
      ]);
    });
  });
});
