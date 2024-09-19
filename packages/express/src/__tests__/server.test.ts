import express from "express";
import request from "supertest";
import { APIError, catchAsync, errorHandler } from "../main";

describe("Server errors", () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();

    app.get(
      "/internal-server-error",
      catchAsync(async (req, res) => {
        throw new APIError.InternalServerError("Internal server error message");
      }),
    );
    app.get(
      "/not-implemented",
      catchAsync(async (req, res) => {
        throw new APIError.NotImplemented("Not implemented error message");
      }),
    );
    app.get(
      "/bad-gateway",
      catchAsync(async (req, res) => {
        throw new APIError.BadGateway("Bad gateway error message");
      }),
    );
    app.get(
      "/service-unavailable",
      catchAsync(async (req, res) => {
        throw new APIError.ServiceUnavailable("Service unavailable error message");
      }),
    );
    app.get(
      "/bad-gateway",
      catchAsync(async (req, res) => {
        throw new APIError.BadGateway("Bad gateway error message");
      }),
    );
    app.get(
      "/gateway-timeout",
      catchAsync(async (req, res) => {
        throw new APIError.GatewayTimeout("Gateway timeout error message");
      }),
    );
    app.get(
      "/version-not-supported",
      catchAsync(async (req, res) => {
        throw new APIError.HTTPVersionNotSupported("HTTP version not supported error message");
      }),
    );
    app.get(
      "/service-unavailable",
      catchAsync(async (req, res) => {
        throw new APIError.ServiceUnavailable("Service unavailable error");
      }),
    );
    app.get(
      "/unhandled-error",
      catchAsync(async (req, res) => {
        throw new Error("Unhandled error");
      }),
    );

    app.use(errorHandler({ logErrors: false }));
  });

  it("should throw an internal server error", async () => {
    const response = await request(app).get("/internal-server-error");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "Internal server error",
      success: false,
      data: {},
    });
  });

  it("should throw a not implemented error", async () => {
    const response = await request(app).get("/not-implemented");

    expect(response.status).toBe(501);
    expect(response.body).toEqual({
      error: "Not implemented error message",
      success: false,
      data: {},
    });
  });

  it("should throw a bad gateway error", async () => {
    const response = await request(app).get("/bad-gateway");

    expect(response.status).toBe(502);
    expect(response.body).toEqual({
      error: "Bad gateway error message",
      success: false,
      data: {},
    });
  });

  it("should throw a service unavailable error", async () => {
    const response = await request(app).get("/service-unavailable");

    expect(response.status).toBe(503);
    expect(response.body).toEqual({
      error: "Service unavailable error message",
      success: false,
      data: {},
    });
  });

  it("should throw a gateway timeout error", async () => {
    const response = await request(app).get("/gateway-timeout");

    expect(response.status).toBe(504);
    expect(response.body).toEqual({
      error: "Gateway timeout error message",
      success: false,
      data: {},
    });
  });

  it("should throw an HTTP version not supported error", async () => {
    const response = await request(app).get("/version-not-supported");

    expect(response.status).toBe(505);
    expect(response.body).toEqual({
      error: "HTTP version not supported error message",
      success: false,
      data: {},
    });
  });

  it("should return a 500 error for unhandled errors", async () => {
    const response = await request(app).get("/unhandled-error");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      error: "Internal server error",
      success: false,
      data: {},
    });
  });
});
