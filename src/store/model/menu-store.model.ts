interface MenuOptionStoreModel {
    id: string;
    label: string;
    link: string;
}

export interface MenuStoreModel {
    mainMenuIsOpen: boolean;
    options: MenuOptionStoreModel[];
}