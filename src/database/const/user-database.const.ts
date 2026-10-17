import { BaseDatabaseModel } from '../model/base/base-database.model';
import { UserDataDatabaseModel } from '../model/data/user-data-database.model';

export const USER_0: BaseDatabaseModel<UserDataDatabaseModel> = {
  data: {
    firstName: 'Jakub',
    lastName: 'Olejarczyk',
    phoneNumber: '+48 501 007 197',
    email: 'jakub.olejarczyk@outlook.com',
    city: 'Kielce',
    country: 'Poland',
    links: [
      'olejarczykjakub.com',
      'linkedin.com/in/jakub-olejarczyk',
      'github.com/jakubolejarczyk',
      'leetcode.com/u/JakubOlejarczyk',
    ],
  },
  metadata: {
    id: 0,
    order: 0,
    isSelected: false,
  },
};
