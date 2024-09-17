import { type Request, type Response, type NextFunction } from 'express'

interface CustomError extends Error {
  status?: number
}

const errorHandler = (
  err: CustomError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  const status = err.status ?? 500
  if (status === 500) {
    err.message = 'Internal server error'
  }
  return res.status(status).json({ error: err.message, success: false, data: {} })
}

export default errorHandler