export class _ErrorInternalServerError extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "InternalServerError";
    this.status = 500;
  }
}

export class _ErrorNotImplemented extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotImplementedError";
    this.status = 501;
  }
}

export class _ErrorBadGateway extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "BadGatewayError";
    this.status = 502;
  }
}

export class _ErrorServiceUnavailable extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "ServiceUnavailableError";
    this.status = 503;
  }
}

export class _ErrorGatewayTimeout extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "GatewayTimeoutError";
    this.status = 504;
  }
}

export class _ErrorHTTPVersionNotSupported extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "HTTPVersionNotSupportedError";
    this.status = 505;
  }
}

export class _ErrorVariantAlsoNegotiates extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "VariantAlsoNegotiatesError";
    this.status = 506;
  }
}

export class _ErrorInsufficientStorage extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "InsufficientStorageError";
    this.status = 507;
  }
}
export class _ErrorLoopDetected extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "LoopDetectedError";
    this.status = 508;
  }
}

export class _ErrorNotExtended extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NotExtendedError";
    this.status = 510;
  }
}

export class _ErrorNetworkAuthenticationRequired extends Error {
  status: number;

  constructor(message: string) {
    super(message);
    this.name = "NetworkAuthenticationRequiredError";
    this.status = 511;
  }
}
