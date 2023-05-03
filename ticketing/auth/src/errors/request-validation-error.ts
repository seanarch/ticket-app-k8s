import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

// interface CustomError {
//   statusCode: number;
//   serializeErrors(): {
//     message: string;
//     field?: string;
//   }[];
// }

// instead, use abstract class

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();

    // extending built in class
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((err) => {
      return { message: err.msg };
    });
  }
}
