import { __BaseError } from "./base-error";

export class _ErrorInternalServerError extends __BaseError {
  constructor(message: string, name: string = "Internal Server Error") {
    super(message, 500, name);
  }
}

export class _ErrorNotImplemented extends __BaseError {
  constructor(message: string, name: string = "Not Implemented") {
    super(message, 501, name);
  }
}

export class _ErrorBadGateway extends __BaseError {
  constructor(message: string, name: string = "Bad Gateway") {
    super(message, 502, name);
  }
}

export class _ErrorServiceUnavailable extends __BaseError {
  constructor(message: string, name: string = "Service Unavailable") {
    super(message, 503, name);
  }
}

export class _ErrorGatewayTimeout extends __BaseError {
  constructor(message: string, name: string = "Gateway Timeout") {
    super(message, 504, name);
  }
}

export class _ErrorHTTPVersionNotSupported extends __BaseError {
  constructor(message: string, name: string = "HTTP Version Not Supported") {
    super(message, 505, name);
  }
}

export class _ErrorVariantAlsoNegotiates extends __BaseError {
  constructor(message: string, name: string = "Variant Also Negotiates") {
    super(message, 506, name);
  }
}

export class _ErrorInsufficientStorage extends __BaseError {
  constructor(message: string, name: string = "Insufficient Storage") {
    super(message, 507, name);
  }
}

export class _ErrorLoopDetected extends __BaseError {
  constructor(message: string, name: string = "Loop Detected") {
    super(message, 508, name);
  }
}

export class _ErrorNotExtended extends __BaseError {
  constructor(message: string, name: string = "Not Extended") {
    super(message, 510, name);
  }
}

export class _ErrorNetworkAuthenticationRequired extends __BaseError {
  constructor(message: string, name: string = "Network Authentication Required") {
    super(message, 511, name);
  }
}
