import {
  _ErrorBadRequest,
  _ErrorUnauthorized,
  _ErrorNotFound,
  _ErrorPaymentRequired,
  _ErrorForbidden,
  _ErrorMethodNotAllowed,
  _ErrorRequestTimeout,
  _ErrorUnsupportedMediaType,
  _ErrorUnprocessableEntity,
  _ErrorUpgradeRequired,
  _ErrorTooManyRequests,
  _ErrorRequestHeaderFieldsTooLarge,
  _ErrorUnavailableForLegalReasons,
  _ErrorProxyAuthenticationRequired,
} from "./client-errors";

import {
  _ErrorInternalServerError,
  _ErrorNotImplemented,
  _ErrorBadGateway,
  _ErrorServiceUnavailable,
  _ErrorGatewayTimeout,
  _ErrorHTTPVersionNotSupported,
} from "./server-errors";

namespace APIError {
  // Client 4xx errors
  export const BadRequest = _ErrorBadRequest;
  export const Unauthorized = _ErrorUnauthorized;
  export const PaymentRequired = _ErrorPaymentRequired;
  export const Forbidden = _ErrorForbidden;
  export const NotFound = _ErrorNotFound;
  export const MethodNotAllowed = _ErrorMethodNotAllowed;
  export const RequestTimeout = _ErrorRequestTimeout;
  export const UnsupportedMediaType = _ErrorUnsupportedMediaType;
  export const UnprocessableEntity = _ErrorUnprocessableEntity;
  export const TooManyRequests = _ErrorTooManyRequests;
  // export const RequestHeaderFieldsTooLarge = _ErrorRequestHeaderFieldsTooLarge;
  // export const UnavailableForLegalReasons = _ErrorUnavailableForLegalReasons;
  // export const ProxyAuthenticationRequired = _ErrorProxyAuthenticationRequired;

  // Server 5xx errors
  export const InternalServerError = _ErrorInternalServerError;
  export const NotImplemented = _ErrorNotImplemented;
  export const BadGateway = _ErrorBadGateway;
  export const ServiceUnavailable = _ErrorServiceUnavailable;
  export const GatewayTimeout = _ErrorGatewayTimeout;
  export const HTTPVersionNotSupported = _ErrorHTTPVersionNotSupported;
}

export { APIError };
