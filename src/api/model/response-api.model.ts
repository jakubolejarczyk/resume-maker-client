export interface ResponseApiModel<TBody> {
    success: boolean;
    message: string;
    body: TBody;
}