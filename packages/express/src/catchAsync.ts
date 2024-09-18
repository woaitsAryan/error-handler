import type { Request, Response, NextFunction } from "express";

/**
 * Wraps an async Express route handler to automatically catch and forward errors to the next middleware.
 *
 * Wrap your controller functions with this to automatically catch any errors and forward them to the error handler.
 */
const catchAsync = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => (req: Request, res: Response, next: NextFunction) => {
  fn(req, res, next).catch((err: Error) => {
    next(err);
  });
};

export { catchAsync };
