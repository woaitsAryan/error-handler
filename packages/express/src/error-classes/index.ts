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

/**
 * APIError namespace
 *
 * This namespace provides a collection of standardized HTTP error classes for both client (4xx) and server (5xx) errors.
 * Each error class corresponds to a specific HTTP status code and can be used to create consistent error responses in an API.
 *
 *  Client Errors (4xx):
 * - BadRequest (400)
 * - Unauthorized (401)
 * - PaymentRequired (402)
 * - Forbidden (403)
 * - NotFound (404)
 * - MethodNotAllowed (405)
 * - RequestTimeout (408)
 * - UnsupportedMediaType (415)
 * - UnprocessableEntity (422)
 * - TooManyRequests (429)
 *
 * Server Errors (5xx):
 * - InternalServerError (500)
 * - NotImplemented (501)
 * - BadGateway (502)
 * - ServiceUnavailable (503)
 * - GatewayTimeout (504)
 * - HTTPVersionNotSupported (505)
 *
 * @example
 * Usage:
 * throw new APIError.BadRequest('Invalid input');
 * throw new APIError.NotFound('User not found');
 * throw new APIError.InternalServerError('Unexpected error occurred');
 */
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
