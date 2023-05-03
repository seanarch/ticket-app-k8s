import { ValidationError } from "express-validator";

export class DatabaseConnectionError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
