export interface ResponseLogicModel<TBody> {
  success: boolean;
  message: string;
  body: TBody;
}
