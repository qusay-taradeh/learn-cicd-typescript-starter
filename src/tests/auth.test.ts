import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

import { describe, expect, test } from "vitest";

const headers_valid: IncomingHttpHeaders = {
  authorization: "ApiKey 1a2b3c4d5e6f",
};

const headers_invalid1: IncomingHttpHeaders = {
  authorization: "ApiKey",
};

const headers_invalid2: IncomingHttpHeaders = {
  authorization: "1a2b3c4d5e6f",
};

const headers_invalid3: IncomingHttpHeaders = {
  authorization: undefined,
};

describe("headers", () => {
  test("headers are valid", () => {
    const result = getAPIKey(headers_valid);

    expect(result).toBeTypeOf("string");
  });

  test("api key value missed", () => {
    const result = getAPIKey(headers_invalid1);

    expect(result).toBeNull();
  });

  test("ApiKey header missed", () => {
    const result = getAPIKey(headers_invalid1);

    expect(result).toBeNull();
  });

  test("Authorization is undefined", () => {
    const result = getAPIKey(headers_invalid1);

    expect(result).toBeNull();
  });

  // This test to ensure that CI fails when our tests don't pass
  // test("Breake Code Test (Fail Test)", () => {
  //     const result = getAPIKey(headers_invalid1);

  //     expect(result).toBeTypeOf("string");
  // });
});
