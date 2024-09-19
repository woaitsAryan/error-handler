import express from "express";
import request from "supertest";
import { APIError, catchAsync, errorHandler } from "../main";

describe("Client errors", () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();

    app.get(
      "/bad-request",
      catchAsync(async (req, res) => {
        throw new APIError.BadRequest("Bad request error message");
      }),
    );
    app.get(
      "/unauthorized",
      catchAsync(async (req, res) => {
        throw new APIError.Unauthorized("Unauthorized error message");
      }),
    );
    app.get(
      "/payment-required",
      catchAsync(async (req, res) => {
        throw new APIError.PaymentRequired("Payment required error message");
      }),
    );
    app.get(
      "/forbidden",
      catchAsync(async (req, res) => {
        throw new APIError.Forbidden("Forbidden error message");
      }),
    );
    app.get(
      "/not-found",
      catchAsync(async (req, res) => {
        throw new APIError.NotFound("Not found error message");
      }),
    );
    app.get(
      "/method-not-allowed",
      catchAsync(async (req, res) => {
        throw new APIError.MethodNotAllowed("Method not allowed error message");
      }),
    );
    app.get(
      "/request-timeout",
      catchAsync(async (req, res) => {
        throw new APIError.RequestTimeout("Request timeout error message");
      }),
    );
    app.get(
      "/unsupported-media-type",
      catchAsync(async (req, res) => {
        throw new APIError.UnsupportedMediaType("Unsupported media type error message");
      }),
    );
    app.get(
      "/unprocessable-entity",
      catchAsync(async (req, res) => {
        throw new APIError.UnprocessableEntity("Unprocessable entity error message");
      }),
    );
    app.get(
      "/too-many-requests",
      catchAsync(async (req, res) => {
        throw new APIError.TooManyRequests("Too many requests error message");
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

  it("should throw a bad request error", async () => {
    const response = await request(app).get("/bad-request");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Bad request error message",
      success: false,
      data: {},
    });
  });

  it("should throw an unauthorized error", async () => {
    const response = await request(app).get("/unauthorized");

    expect(response.status).toBe(401);
    expect(response.body).toEqual({
      error: "Unauthorized error message",
      success: false,
      data: {},
    });
  });

  it("should throw a payment required error", async () => {
    const response = await request(app).get("/payment-required");

    expect(response.status).toBe(402);
    expect(response.body).toEqual({
      error: "Payment required error message",
      success: false,
      data: {},
    });
  });

  it("should throw a forbidden error", async () => {
    const response = await request(app).get("/forbidden");

    expect(response.status).toBe(403);
    expect(response.body).toEqual({
      error: "Forbidden error message",
      success: false,
      data: {},
    });
  });

  it("should throw a not found error", async () => {
    const response = await request(app).get("/not-found");

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "Not found error message",
      success: false,
      data: {},
    });
  });

  it("should throw a method not allowed error", async () => {
    const response = await request(app).get("/method-not-allowed");

    expect(response.status).toBe(405);
    expect(response.body).toEqual({
      error: "Method not allowed error message",
      success: false,
      data: {},
    });
  });

  it("should throw a request timeout error", async () => {
    const response = await request(app).get("/request-timeout");

    expect(response.status).toBe(408);
    expect(response.body).toEqual({
      error: "Request timeout error message",
      success: false,
      data: {},
    });
  });

  it("should throw an unsupported media type error", async () => {
    const response = await request(app).get("/unsupported-media-type");

    expect(response.status).toBe(415);
    expect(response.body).toEqual({
      error: "Unsupported media type error message",
      success: false,
      data: {},
    });
  });

  it("should throw an unprocessable entity error", async () => {
    const response = await request(app).get("/unprocessable-entity");

    expect(response.status).toBe(422);
    expect(response.body).toEqual({
      error: "Unprocessable entity error message",
      success: false,
      data: {},
    });
  });
  it("should throw an too many requests error", async () => {
    const response = await request(app).get("/too-many-requests");

    expect(response.status).toBe(429);
    expect(response.body).toEqual({
      error: "Too many requests error message",
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
