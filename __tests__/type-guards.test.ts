import { describe, expect, test } from "vitest";
import { isDefined, isFunction, isPromise, isUndefined } from "../src/index";

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
