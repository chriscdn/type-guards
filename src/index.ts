/**
 * Returns true if the value is neither `null` nor `undefined`.
 */
const isDefined = <T>(value: T | null | undefined): value is NonNullable<T> =>
  value !== null && value !== undefined;

/**
 * Returns true if the value is exactly `undefined`.
 */
const isUndefined = (value: unknown): value is undefined => value === undefined;

/**
 * Returns true if the value is exactly `null`.
 */
const isNull = (value: unknown): value is null => value === null;

/**
 * Returns true if the value is either `null` or `undefined`.
 */
const isNullish = (value: unknown): value is null | undefined =>
  isNull(value) || isUndefined(value);

/**
 * Returns true if the value is a string.
 */
const isString = (value: unknown): value is string => typeof value === "string";

/**
 * Returns true if the value is a finite number with an integer value.
 */
const isInteger = (value: unknown): value is number =>
  typeof value === "number" && Number.isInteger(value);

/**
 * Returns true if the value is a finite number.
 */
const isNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);

/**
 * Returns true if the value is an array.
 */
const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

/**
 * Returns true if the value is a plain object.
 *
 * Arrays, class instances, `null`, and `undefined` return false.
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  Object.getPrototypeOf(value) === Object.prototype;

/**
 * Returns true if the value is a boolean.
 */
const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";

/**
 * Returns true if the value is a bigint.
 */
const isBigInt = (value: unknown): value is bigint => typeof value === "bigint";

/**
 * Returns true if the value is a symbol.
 */
const isSymbol = (value: unknown): value is symbol => typeof value === "symbol";

/**
 * Returns true if the value is a function.
 */
const isFunction = (value: unknown): value is Function =>
  typeof value === "function";

/**
 * Returns true if the value is a valid Date instance.
 *
 * Invalid dates, `null`, and `undefined` return false.
 */
const isDate = (value: unknown): value is Date =>
  value instanceof Date && !Number.isNaN(value.getTime());

/**
 * Returns true if the value is a RegExp instance.
 */
const isRegExp = (value: unknown): value is RegExp => value instanceof RegExp;

/**
 * Returns true if the value is a Promise.
 */
const isPromise = (value: unknown): value is Promise<unknown> =>
  value instanceof Promise;

/**
 * Returns true if the value is an Error-like object.
 */
const isError = (value: unknown): value is Error => value instanceof Error;

/**
 * Returns true if the value is a non empty string containing at least one non white space character.
 *
 * Empty strings, strings containing only white space, `null`, and `undefined` return false.
 */
const isStringWithValue = (value: unknown): value is string =>
  isString(value) && value.trim() !== "";

/**
 * Returns true if the value is a FormData instance.
 */
const isFormData = (value: unknown): value is FormData =>
  value instanceof FormData;

/**
 * Returns true if the value is a Blob instance.
 */
const isBlob = (value: unknown): value is Blob => value instanceof Blob;

export {
  isArray,
  isBigInt,
  isBlob,
  isBoolean,
  isDate,
  isDefined,
  isError,
  isFormData,
  isFunction,
  isInteger,
  isNull,
  isNullish,
  isNumber,
  isPlainObject,
  isPromise,
  isRegExp,
  isString,
  isStringWithValue,
  isSymbol,
  isUndefined,
};
