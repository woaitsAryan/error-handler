import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { __BaseError } from "./error-classes/base-error";


export function withErrorHandler(fn: any): any {
  return async function (request: NextRequest, ...args: any[]) {
    try {
      return await fn(request, ...args);
    } catch (err: unknown) {
      if (err instanceof __BaseError) {
        return NextResponse.json({ "success": false, "error": err.message }, { status: err.status })
      } else if (err instanceof Error) {
        return NextResponse.json({ "success": false, "error": err.message }, { status: 500 })
      } else {
        return NextResponse.json({ "success": false, "error": "Internal server error" }, { status: 500 })
      }
    }
  }
}
