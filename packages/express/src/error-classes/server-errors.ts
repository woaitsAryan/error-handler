import { __BaseError } from "./base-error";

export class _ErrorInternalServerError extends __BaseError {
  constructor(message: string = "Internal Server Error") {
    super(message, 500);
  }
}

export class _ErrorNotImplemented extends __BaseError {
  constructor(message: string = "Not Implemented") {
    super(message, 501);
  }
}

export class _ErrorBadGateway extends __BaseError {
  constructor(message: string = "Bad Gateway") {
    super(message, 502);
  }
}

export class _ErrorServiceUnavailable extends __BaseError {
  constructor(message: string = "Service Unavailable") {
    super(message, 503);
  }
}

export class _ErrorGatewayTimeout extends __BaseError {
  constructor(message: string = "Gateway Timeout") {
    super(message, 504);
  }
}

export class _ErrorHTTPVersionNotSupported extends __BaseError {
  constructor(message: string = "HTTP Version Not Supported") {
    super(message, 505);
  }
}

export class _ErrorVariantAlsoNegotiates extends __BaseError {
  constructor(message: string = "Variant Also Negotiates") {
    super(message, 506);
  }
}

export class _ErrorInsufficientStorage extends __BaseError {
  constructor(message: string = "Insufficient Storage") {
    super(message, 507);
  }
}

export class _ErrorLoopDetected extends __BaseError {
  constructor(message: string = "Loop Detected") {
    super(message, 508);
  }
}

export class _ErrorNotExtended extends __BaseError {
  constructor(message: string = "Not Extended") {
    super(message, 510);
  }
}

export class _ErrorNetworkAuthenticationRequired extends __BaseError {
  constructor(message: string = "Network Authentication Required") {
    super(message, 511);
  }
}
