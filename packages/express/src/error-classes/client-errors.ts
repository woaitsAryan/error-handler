import { __BaseError } from "./base-error";

export class _ErrorBadRequest extends __BaseError {
  constructor(message: string = "Bad Request") {
    super(message, 400);
  }
}

export class _ErrorUnauthorized extends __BaseError {
  constructor(message: string = "Unauthorized") {
    super(message, 401);
  }
}
export class _ErrorPaymentRequired extends __BaseError {
  constructor(message: string = "Payment Required") {
    super(message, 402);
  }
}
export class _ErrorForbidden extends __BaseError {
  constructor(message: string = "Forbidden") {
    super(message, 403);
  }
}
export class _ErrorNotFound extends __BaseError {
  constructor(message: string = "Not Found") {
    super(message, 404);
  }
}

export class _ErrorMethodNotAllowed extends __BaseError {
  constructor(message: string = "Method Not Allowed") {
    super(message, 405);
  }
}
export class _ErrorNotAcceptable extends __BaseError {
  constructor(message: string = "Not Acceptable") {
    super(message, 406);
  }
}
export class _ErrorProxyAuthenticationRequired extends __BaseError {
  constructor(message: string = "Proxy Authentication Required") {
    super(message, 407);
  }
}

export class _ErrorRequestTimeout extends __BaseError {
  constructor(message: string = "Request Timeout") {
    super(message, 408);
  }
}

export class _ErrorConflict extends __BaseError {
  constructor(message: string = "Conflict") {
    super(message, 409);
  }
}

export class _ErrorGone extends __BaseError {
  constructor(message: string = "Gone") {
    super(message, 410);
  }
}

export class _ErrorLengthRequired extends __BaseError {
  constructor(message: string = "Length Required") {
    super(message, 411);
  }
}

export class _ErrorPreconditionFailed extends __BaseError {
  constructor(message: string = "Precondition Failed") {
    super(message, 412);
  }
}

export class _ErrorRequestEntityTooLarge extends __BaseError {
  constructor(message: string = "Request Entity Too Large") {
    super(message, 413);
  }
}

export class _ErrorRequestURITooLong extends __BaseError {
  constructor(message: string = "Request URI Too Long") {
    super(message, 414);
  }
}

export class _ErrorUnsupportedMediaType extends __BaseError {
  constructor(message: string = "Unsupported Media Type") {
    super(message, 415);
  }
}

export class _ErrorRequestedRangeNotSatisfiable extends __BaseError {
  constructor(message: string = "Requested Range Not Satisfiable") {
    super(message, 416);
  }
}

export class _ErrorExpectationFailed extends __BaseError {
  constructor(message: string = "Expectation Failed") {
    super(message, 417);
  }
}

export class _ErrorTeapot extends __BaseError {
  constructor(message: string = "I'm a teapot") {
    super(message, 418);
  }
}

export class _ErrorMisdirectedRequest extends __BaseError {
  constructor(message: string = "Misdirected Request") {
    super(message, 421);
  }
}

export class _ErrorUnprocessableEntity extends __BaseError {
  constructor(message: string = "Unprocessable Entity") {
    super(message, 422);
  }
}

export class _ErrorLocked extends __BaseError {
  constructor(message: string = "Locked") {
    super(message, 423);
  }
}

export class _ErrorFailedDependency extends __BaseError {
  constructor(message: string = "Failed Dependency") {
    super(message, 424);
  }
}

export class _ErrorTooEarly extends __BaseError {
  constructor(message: string = "Too Early") {
    super(message, 425);
  }
}

export class _ErrorUpgradeRequired extends __BaseError {
  constructor(message: string = "Upgrade Required") {
    super(message, 426);
  }
}

export class _ErrorPreconditionRequired extends __BaseError {
  constructor(message: string = "Precondition Required") {
    super(message, 428);
  }
}

export class _ErrorTooManyRequests extends __BaseError {
  constructor(message: string = "Too Many Requests") {
    super(message, 429);
  }
}

export class _ErrorRequestHeaderFieldsTooLarge extends __BaseError {
  constructor(message: string = "Request Header Fields Too Large") {
    super(message, 431);
  }
}

export class _ErrorUnavailableForLegalReasons extends __BaseError {
  constructor(message: string = "Unavailable For Legal Reasons") {
    super(message, 451);
  }
}
