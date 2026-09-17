interface NavOptionStoreModel {
    id: string;
    label: string;
    link: string;
    isActive: boolean;
}

export interface NavStoreModel {
    menuIsOpen: boolean;
    options: NavOptionStoreModel[];
}