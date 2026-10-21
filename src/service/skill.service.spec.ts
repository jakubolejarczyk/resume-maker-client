import { TestBed } from '@angular/core/testing';
import { switchMap, map, tap } from 'rxjs';

import { SkillService } from './skill.service';
import { providerStore } from '../store/provider/provider.store';
import {
  SKILL_0,
  SKILL_1,
  SKILL_2,
  SKILL_3,
} from '../database/const/skill-database.const';

describe('Skill Service', () => {
  let service: SkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(SkillService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the status value from the store correctly for skills.', () => {
    service.getStatus().subscribe((response) => {
      expect(response).toEqual({
        success: true,
        message: 'The items was read correctly.',
      });
    });
  });

  it('Should return the isLoading value from the store correctly for skills.', () => {
    service.getIsLoading().subscribe((response) => {
      expect(response).toBeFalsy();
    });
  });

  it('Should return the items value from the store correctly for skills.', () => {
    service.getItems().subscribe((response) => {
      expect(response).toEqual([SKILL_0, SKILL_1, SKILL_2, SKILL_3]);
    });
  });

  it('Should return the selectedItem value from the store correctly for skills.', () => {
    service.getSelectedItem().subscribe((response) => {
      expect(response).toBeUndefined();
    });
  });

  it('Should return the columns value from the store correctly for skills.', () => {
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

  it('Should correctly select the item with id 1 for skills.', () => {
    service
      .select(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            SKILL_0,
            { ...SKILL_1, metadata: { ...SKILL_1.metadata, isSelected: true } },
            SKILL_2,
            SKILL_3,
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly deselect the item with id 1 for skills.', () => {
    service
      .deselect(1)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([SKILL_0, SKILL_1, SKILL_2, SKILL_3]),
        ),
      )
      .subscribe();
  });

  it('Should correctly create the new item for skills.', () => {
    service
      .create(0, {
        category: 'aaa',
        skills: ['a', 'b', 'c'],
      })
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            SKILL_0,
            SKILL_1,
            SKILL_2,
            SKILL_3,
            {
              data: {
                category: 'aaa',
                skills: ['a', 'b', 'c'],
              },
              metadata: {
                id: 4,
                parentId: 0,
                order: 4,
                isSelected: false,
              },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly read the item by id for skills.', () => {
    service
      .readById(1)
      .pipe(tap((item) => expect(item).toEqual(SKILL_1)))
      .subscribe();
  });

  it('Should correctly read the items by parent id for skills.', () => {
    service
      .readByParentId(0)
      .pipe(
        switchMap(() => service.getItems()),
        tap((items) => expect(items).toEqual([SKILL_0, SKILL_1, SKILL_2, SKILL_3]))
      )
      .subscribe();
  });
});
