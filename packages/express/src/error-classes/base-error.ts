export class __BaseError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "BaseError";
    this.status = status;
  }
}
