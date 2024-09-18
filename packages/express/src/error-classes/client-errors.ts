export class _ErrorBadRequest extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "BadRequestError";
    this.status = 400;
  }
}

export class _ErrorUnauthorized extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
    this.status = 401;
  }
}
export class _ErrorPaymentRequired extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "PaymentRequiredError";
    this.status = 402;
  }
}
export class _ErrorForbidden extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "ForbiddenError";
    this.status = 403;
  }
}
export class _ErrorNotFound extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
    this.status = 404;
  }
}

export class _ErrorMethodNotAllowed extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "MethodNotAllowedError";
    this.status = 405;
  }
}

export class _ErrorNotAcceptable extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotAcceptableError";
    this.status = 406;
  }
}

export class _ErrorProxyAuthenticationRequired extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "ProxyAuthenticationRequiredError";
    this.status = 407;
  }
}

export class _ErrorRequestTimeout extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "RequestTimeoutError";
    this.status = 408;
  }
}

export class _ErrorConflict extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "ConflictError";
    this.status = 409;
  }
}

export class _ErrorGone extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "GoneError";
    this.status = 410;
  }
}

export class _ErrorLengthRequired extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "LengthRequiredError";
    this.status = 411;
  }
}

export class _ErrorPreconditionFailed extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "PreconditionFailedError";
    this.status = 412;
  }
}

export class _ErrorRequestEntityTooLarge extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "RequestEntityTooLargeError";
    this.status = 413;
  }
}

export class _ErrorRequestURITooLong extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "RequestURITooLongError";
    this.status = 414;
  }
}

export class _ErrorUnsupportedMediaType extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "UnsupportedMediaTypeError";
    this.status = 415;
  }
}

export class _ErrorRequestedRangeNotSatisfiable extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "RequestedRangeNotSatisfiableError";
    this.status = 416;
  }
}

export class _ErrorExpectationFailed extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "ExpectationFailedError";
    this.status = 417;
  }
}

export class _ErrorTeapot extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "TeapotError";
    this.status = 418;
  }
}

export class _ErrorMisdirectedRequest extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "MisdirectedRequestError";
    this.status = 421;
  }
}

export class _ErrorUnprocessableEntity extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "UnprocessableEntityError";
    this.status = 422;
  }
}

export class _ErrorLocked extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "LockedError";
    this.status = 423;
  }
}

export class _ErrorFailedDependency extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "FailedDependencyError";
    this.status = 424;
  }
}

export class _ErrorTooEarly extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "TooEarlyError";
    this.status = 425;
  }
}

export class _ErrorUpgradeRequired extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "UpgradeRequiredError";
    this.status = 426;
  }
}

export class _ErrorPreconditionRequired extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "PreconditionRequiredError";
    this.status = 428;
  }
}

export class _ErrorTooManyRequests extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "TooManyRequestsError";
    this.status = 429;
  }
}

export class _ErrorRequestHeaderFieldsTooLarge extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "RequestHeaderFieldsTooLargeError";
    this.status = 431;
  }
}

export class _ErrorUnavailableForLegalReasons extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "UnavailableForLegalReasonsError";
    this.status = 451;
  }
}
