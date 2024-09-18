import { type Request, type Response, type NextFunction } from 'express'

interface CustomError extends Error {
  status?: number
}

interface ErrorHandlerConfig {
  logErrors?: boolean;
  defaultMessage?: string;
}

/**
 * Express error handling middleware. Put this at the end of your middleware stack AFTER your routes. Preferably just before app.listen().
 * @example
 * // Response format:
 * {
 *   error: "Your custom error message here",
 *   success: false,
 *   data: {}
 * }
 */
const errorHandler = (config: ErrorHandlerConfig = { logErrors: true, defaultMessage: 'Internal server error' }) => {
  return (
    err: CustomError,
    _req: Request,
    res: Response,
    _next: NextFunction
  ): Response => {
    const status = err.status ?? 500
    let message = err.message

    if (status === 500) {
      message = config.defaultMessage ?? 'Internal server error'
    }

    if (config.logErrors) {
      console.error(err)
    }

    return res.status(status).json({ error: message, success: false, data: {} })
  }
}

export { errorHandler };
