interface MenuOptionStoreModel {
    id: string;
    label: string;
    link: string;
    isActive: boolean;
}

export interface MenuStoreModel {
    mainMenuIsOpen: boolean;
    options: MenuOptionStoreModel[];
}