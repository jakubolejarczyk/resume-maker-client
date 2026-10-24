import { TestBed } from '@angular/core/testing';
import { map, switchMap, tap } from 'rxjs';
import { MessageService } from 'primeng/api';

import { UserService } from './user.service';
import { providerStore } from '../store/provider/provider.store';
import { USER_0 } from '../database/const/user-database.const';

describe('User Service', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [providerStore, MessageService],
    });
    service = TestBed.inject(UserService);
    service.readByParentId(undefined).subscribe().unsubscribe();
  });

  it('Should return the status value from the store correctly for users.', () => {
    service.getStatus().subscribe((response) => {
      expect(response).toEqual({
        success: true,
        message: 'The items was read correctly.',
      });
    });
  });

  it('Should return the isLoading value from the store correctly for users.', () => {
    service.getIsLoading().subscribe((response) => {
      expect(response).toBeFalsy();
    });
  });

  it('Should return the items value from the store correctly for users.', () => {
    service.getItems().subscribe((response) => {
      expect(response).toEqual([USER_0]);
    });
  });

  it('Should return the selectedItem value from the store correctly for users.', () => {
    service.getSelectedItem().subscribe((response) => {
      expect(response).toBeUndefined();
    });
  });

  it('Should return the columns value from the store correctly for users.', () => {
    service.getColumns().subscribe((response) => {
      expect(response).toEqual([
        {
          id: 'firstName',
          label: 'First name',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'lastName',
          label: 'Last name',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'phoneNumber',
          label: 'Phone number',
          isVisible: false,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'email',
          label: 'Email',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'city',
          label: 'City',
          isVisible: false,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'country',
          label: 'Country',
          isVisible: false,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'links',
          label: 'Links',
          isVisible: false,
          isEditable: true,
          type: 'string',
          isArray: true,
        },
      ]);
    });
  });

  it('Should correctly select the item with id 0 for users.', () => {
    service
      .select(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            { ...USER_0, metadata: { ...USER_0.metadata, isSelected: true } },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly deselect the item with id 0 for users.', () => {
    service
      .deselect(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([USER_0])),
      )
      .subscribe();
  });

  it('Should correctly create the new item. for users', () => {
    service
      .create(undefined, {
        firstName: 'aaa',
        lastName: 'bbb',
        email: 'ccc',
        phoneNumber: 'ddd',
        city: 'eee',
        country: 'fff',
        links: ['a', 'b', 'c'],
      })
      .pipe(
        switchMap(() => service.getItems()),
        map((items) =>
          expect(items).toEqual([
            USER_0,
            {
              data: {
                firstName: 'aaa',
                lastName: 'bbb',
                email: 'ccc',
                phoneNumber: 'ddd',
                city: 'eee',
                country: 'fff',
                links: ['a', 'b', 'c'],
              },
              metadata: {
                id: 1,
                order: 1,
                isSelected: false,
              },
            },
          ]),
        ),
      )
      .subscribe();
  });

  it('Should correctly read the item by id for users.', () => {
    service
      .readById(0)
      .pipe(tap((item) => expect(item).toEqual(USER_0)))
      .subscribe();
  });

  it('Should correctly read the items by parent id for users.', () => {
    service
      .readByParentId(undefined)
      .pipe(
        switchMap(() => service.getItems()),
        tap((items) => expect(items).toEqual([USER_0])),
      )
      .subscribe();
  });

  it('Should correctly update the new item for users.', () => {
    const USER_0_CLONE = structuredClone(USER_0);
    USER_0_CLONE.data.firstName = 'aaa';
    service
      .update(0, USER_0_CLONE.data)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([USER_0_CLONE])),
      )
      .subscribe();
  });

  it('Should correctly delete the item for users.', () => {
    service
      .delete(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([])),
      )
      .subscribe();
  });

  it('Should correctly move up the item for users.', () => {
    service
      .moveUp(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([USER_0])),
      )
      .subscribe();
  });

  it('Should correctly move down the item for users.', () => {
    service
      .moveDown(0)
      .pipe(
        switchMap(() => service.getItems()),
        map((items) => expect(items).toEqual([USER_0])),
      )
      .subscribe();
  });
});
