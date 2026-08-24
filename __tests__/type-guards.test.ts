import { describe, expect, test } from "vitest";
import {
  isArrayOf,
  isDefined,
  isDefinedOrNull,
  isFunction,
  isNumber,
  isPromise,
  isString,
  isUndefined,
} from "../src/index";

const add = (a: number, b: number) => a + b;
const addAsync = async (a: number, b: number) => a + b;

const promise = new Promise(() => null);

describe("isUndefined", () => {
  test("undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test("null", () => {
    expect(isUndefined(null)).toBe(false);
  });

  test("string", () => {
    expect(isUndefined("hello")).toBe(false);
  });
});

describe("isDefined", () => {
  test("undefined", () => {
    expect(isDefined(undefined)).toBe(false);
  });

  test("null", () => {
    expect(isDefined(null)).toBe(false);
  });

  test("string", () => {
    expect(isDefined("hello")).toBe(true);
  });
});

describe("promise", () => {
  test("sync", () => {
    expect(!isPromise(add(1, 2))).toBe(true);
  });

  test("async", () => {
    expect(isPromise(addAsync(1, 2))).toBe(true);
  });

  test("promise", () => {
    expect(isPromise(promise)).toBe(true);
  });
});

describe("isFunction", () => {
  test("sync", () => {
    expect(isFunction(add)).toBe(true);
  });

  test("async", () => {
    expect(isFunction(addAsync)).toBe(true);
  });
});

describe("isArrayOf", () => {
  test("number[]", () => {
    expect(isArrayOf([1, 2, 3], isNumber)).toBe(true);
  });

  test("string[]", () => {
    expect(isArrayOf(["1", "2", "3"], isString)).toBe(true);
  });

  test("stringbroken[]", () => {
    expect(isArrayOf(["1", "2", 3], isString)).toBe(false);
  });

  test("mixed[]", () => {
    expect(
      isArrayOf(["1", "2", 3], (value) => isString(value) || isNumber(value)),
    ).toBe(true);
  });

  test("isDefinedOrNull", () => {
    expect(isDefinedOrNull(null)).toBe(true);
    expect(isDefinedOrNull(0)).toBe(true);
  });
});
