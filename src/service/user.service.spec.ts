import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { providerStore } from '../store/provider/provider.store';

describe('User Service', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [providerStore] });
    service = TestBed.inject(UserService);
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
          isVisible: true,
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
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'country',
          label: 'Country',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: false,
        },
        {
          id: 'links',
          label: 'Links',
          isVisible: true,
          isEditable: true,
          type: 'string',
          isArray: true,
        },
      ]);
    });
  });

  //   it('Should return items from the store.', () => {
  //     service.getItems().subscribe((items) => {
  //       expect(items).toEqual([
  //         { id: 0, name: 'Dog', order: 0 },
  //         { id: 1, name: 'Cat', order: 1 },
  //       ]);
  //     });
  //   });

  //   it('Should correctly create item from the store and save it in the external service.', () => {
  //     service
  //       .create({ name: 'Bird', order: 2 })
  //       .pipe(
  //         switchMap(() => service.getStatus()),
  //         tap((status) =>
  //           expect(status).toEqual({
  //             success: true,
  //             message: 'Successfully created item.',
  //           }),
  //         ),
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) => {
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //             { id: 2, name: 'Bird', order: 2 },
  //           ]);
  //         }),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should correctly read item from api.', () => {
  //     service
  //       .read(1)
  //       .pipe(
  //         tap((item) => expect(item).toEqual({ id: 1, name: 'Cat', order: 1 })),
  //         switchMap(() => service.getStatus()),
  //         tap((status) =>
  //           expect(status).toEqual({
  //             success: true,
  //             message: 'Successfully retrieved item.',
  //           }),
  //         ),
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should correctly read all items from api and save it to the store.', () => {
  //     service
  //       .readAll()
  //       .pipe(
  //         switchMap(() => service.getStatus()),
  //         tap((status) =>
  //           expect(status).toEqual({
  //             success: true,
  //             message: 'Successfully retrieved all items.',
  //           }),
  //         ),
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should correctly update item from the store and save it in the external service.', () => {
  //     service
  //       .update({ id: 0, name: 'Bird', order: 0 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Bird', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should correctly delete item from the store and save it in the external service.', () => {
  //     service
  //       .delete({ id: 1, name: 'Cat', order: 1 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([{ id: 0, name: 'Dog', order: 0 }]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should correctly select item from the store and save it in the selected item.', () => {
  //     service
  //       .selectItem({ id: 0, name: 'Dog', order: 0 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) =>
  //           expect(selectedItem).toEqual({ id: 0, name: 'Dog', order: 0 }),
  //         ),
  //       )
  //       .subscribe();
  //   });

  //   it('Should correctly deselect item from the store.', () => {
  //     service
  //       .deselectItem()
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should return a success response when we want to move up the item with order 1.', () => {
  //     service
  //       .moveUp({ id: 1, name: 'Cat', order: 1 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 1, name: 'Cat', order: 0 },
  //             { id: 0, name: 'Dog', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should return an error response when we want to move up the item out of the range.', () => {
  //     service
  //       .moveUp({ id: 2, name: 'Bird', order: 2 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should return an error response when we want to move up the item with order 0.', () => {
  //     service
  //       .moveUp({ id: 0, name: 'Dog', order: 0 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should return a success response when we want to move down the item with order 0.', () => {
  //     service
  //       .moveDown({ id: 0, name: 'Dog', order: 0 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 1, name: 'Cat', order: 0 },
  //             { id: 0, name: 'Dog', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should return an error response when we want to move up the item out of the range.', () => {
  //     service
  //       .moveDown({ id: 2, name: 'Bird', order: 2 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });

  //   it('Should return an error response when we want to move down the last item.', () => {
  //     service
  //       .moveDown({ id: 1, name: 'Cat', order: 1 })
  //       .pipe(
  //         switchMap(() => service.getIsLoading()),
  //         tap((isLoading) => expect(isLoading).toBeFalsy()),
  //         switchMap(() => service.getItems()),
  //         tap((items) =>
  //           expect(items).toEqual([
  //             { id: 0, name: 'Dog', order: 0 },
  //             { id: 1, name: 'Cat', order: 1 },
  //           ]),
  //         ),
  //         switchMap(() => service.getSelectedItem()),
  //         tap((selectedItem) => expect(selectedItem).toBeUndefined()),
  //       )
  //       .subscribe();
  //   });
});
