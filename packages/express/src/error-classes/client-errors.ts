import { __BaseError } from "./base-error";

export class _ErrorBadRequest extends __BaseError {
  constructor(message: string, name: string = "Bad Request") {
    super(message, 400, name);
  }
}

export class _ErrorUnauthorized extends __BaseError {
  constructor(message: string, name: string = "Unauthorized") {
    super(message, 401, name);
  }
}
export class _ErrorPaymentRequired extends __BaseError {
  constructor(message: string, name: string = "Payment Required") {
    super(message, 402, name);
  }
}
export class _ErrorForbidden extends __BaseError {
  constructor(message: string, name: string = "Forbidden") {
    super(message, 403, name);
  }
}
export class _ErrorNotFound extends __BaseError {
  constructor(message: string, name: string = "Not Found") {
    super(message, 404, name);
  }
}

export class _ErrorMethodNotAllowed extends __BaseError {
  constructor(message: string, name: string = "Method Not Allowed") {
    super(message, 405, name);
  }
}
export class _ErrorNotAcceptable extends __BaseError {
  constructor(message: string, name: string = "Not Acceptable") {
    super(message, 406, name);
  }
}
export class _ErrorProxyAuthenticationRequired extends __BaseError {
  constructor(message: string, name: string = "Proxy Authentication Required") {
    super(message, 407, name);
  }
}

export class _ErrorRequestTimeout extends __BaseError {
  constructor(message: string, name: string = "Request Timeout") {
    super(message, 408, name);
  }
}

export class _ErrorConflict extends __BaseError {
  constructor(message: string, name: string = "Conflict") {
    super(message, 409, name);
  }
}

export class _ErrorGone extends __BaseError {
  constructor(message: string, name: string = "Gone") {
    super(message, 410, name);
  }
}

export class _ErrorLengthRequired extends __BaseError {
  constructor(message: string, name: string = "Length Required") {
    super(message, 411, name);
  }
}

export class _ErrorPreconditionFailed extends __BaseError {
  constructor(message: string, name: string = "Precondition Failed") {
    super(message, 412, name);
  }
}

export class _ErrorRequestEntityTooLarge extends __BaseError {
  constructor(message: string, name: string = "Request Entity Too Large") {
    super(message, 413, name);
  }
}

export class _ErrorRequestURITooLong extends __BaseError {
  constructor(message: string, name: string = "Request URI Too Long") {
    super(message, 414, name);
  }
}

export class _ErrorUnsupportedMediaType extends __BaseError {
  constructor(message: string, name: string = "Unsupported Media Type") {
    super(message, 415, name);
  }
}

export class _ErrorRequestedRangeNotSatisfiable extends __BaseError {
  constructor(message: string, name: string = "Requested Range Not Satisfiable") {
    super(message, 416, name);
  }
}

export class _ErrorExpectationFailed extends __BaseError {
  constructor(message: string, name: string = "Expectation Failed") {
    super(message, 417, name);
  }
}

export class _ErrorTeapot extends __BaseError {
  constructor(message: string, name: string = "I'm a teapot") {
    super(message, 418, name);
  }
}

export class _ErrorMisdirectedRequest extends __BaseError {
  constructor(message: string, name: string = "Misdirected Request") {
    super(message, 421, name);
  }
}

export class _ErrorUnprocessableEntity extends __BaseError {
  constructor(message: string, name: string = "Unprocessable Entity") {
    super(message, 422, name);
  }
}

export class _ErrorLocked extends __BaseError {
  constructor(message: string, name: string = "Locked") {
    super(message, 423, name);
  }
}

export class _ErrorFailedDependency extends __BaseError {
  constructor(message: string, name: string = "Failed Dependency") {
    super(message, 424, name);
  }
}

export class _ErrorTooEarly extends __BaseError {
  constructor(message: string, name: string = "Too Early") {
    super(message, 425, name);
  }
}

export class _ErrorUpgradeRequired extends __BaseError {
  constructor(message: string, name: string = "Upgrade Required") {
    super(message, 426, name);
  }
}

export class _ErrorPreconditionRequired extends __BaseError {
  constructor(message: string, name: string = "Precondition Required") {
    super(message, 428, name);
  }
}

export class _ErrorTooManyRequests extends __BaseError {
  constructor(message: string, name: string = "Too Many Requests") {
    super(message, 429, name);
  }
}

export class _ErrorRequestHeaderFieldsTooLarge extends __BaseError {
  constructor(message: string, name: string = "Request Header Fields Too Large") {
    super(message, 431, name);
  }
}

export class _ErrorUnavailableForLegalReasons extends __BaseError {
  constructor(message: string, name: string = "Unavailable For Legal Reasons") {
    super(message, 451, name);
  }
}
