export interface BaseStoreModel<TItem> {
    success: boolean;
    message: string;
    loading: boolean;
    items: TItem[];
    selectedItem: TItem | undefined;
}