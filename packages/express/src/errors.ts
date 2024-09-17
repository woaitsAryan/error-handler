namespace APIError {
  export class ErrorBadRequest extends Error {
    status: number
  
    constructor (message: string) {
      super(message)
      this.name = 'BadRequestError'
      this.status = 400
    }
  }
  
  export class ErrorUnauthorized extends Error {
    status: number

    constructor (message: string) {
      super(message)
      this.name = 'UnauthorizedError'
      this.status = 401
    }
  }
  
  export class ErrorNotFound extends Error {
    status: number
  
    constructor (message: string) {
      super(message)
      this.name = 'NotFoundError'
      this.status = 404
    }
  }
}

export { APIError }