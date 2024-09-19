export class __BaseError extends Error {
  status: number;

  constructor(message: string, status: number, name: string) {
    super(message);
    this.name = name;
    this.status = status;
  }
}
