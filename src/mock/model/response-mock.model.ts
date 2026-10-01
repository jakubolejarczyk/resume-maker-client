export interface ResponseMockModel<TBody> {
    success: boolean;
    message: string;
    body: TBody;
}