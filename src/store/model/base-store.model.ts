interface BaseStoreColumnModel {
    id: string;
    label: string;
    isVisible: boolean;
}

export interface BaseStoreModel<TItem> {
    success: boolean;
    message: string;
    isLoading: boolean;
    items: TItem[];
    selectedItem: TItem | undefined;
    columns: BaseStoreColumnModel[];
}