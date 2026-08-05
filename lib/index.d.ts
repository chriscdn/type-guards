//#region src/index.d.ts
/**
 * Returns true if the value is neither `null` nor `undefined`.
 */
declare const isDefined: <T>(value: T | null | undefined) => value is NonNullable<T>;
/**
 * Returns true if the value is exactly `undefined`.
 */
declare const isUndefined: (value: unknown) => value is undefined;
/**
 * Returns true if the value is exactly `null`.
 */
declare const isNull: (value: unknown) => value is null;
/**
 * Returns true if the value is either `null` or `undefined`.
 */
declare const isNullish: (value: unknown) => value is null | undefined;
/**
 * Returns true if the value is a string.
 */
declare const isString: (value: unknown) => value is string;
/**
 * Returns true if the value is a finite number with an integer value.
 */
declare const isInteger: (value: unknown) => value is number;
/**
 * Returns true if the value is a finite number.
 */
declare const isNumber: (value: unknown) => value is number;
/**
 * Returns true if the value is an array.
 */
declare const isArray: (value: unknown) => value is unknown[];
/**
 * Returns true if the value is a plain object.
 *
 * Arrays, class instances, `null`, and `undefined` return false.
 */
declare const isPlainObject: (value: unknown) => value is Record<string, unknown>;
/**
 * Returns true if the value is a boolean.
 */
declare const isBoolean: (value: unknown) => value is boolean;
/**
 * Returns true if the value is a bigint.
 */
declare const isBigInt: (value: unknown) => value is bigint;
/**
 * Returns true if the value is a symbol.
 */
declare const isSymbol: (value: unknown) => value is symbol;
/**
 * Returns true if the value is a function.
 */
declare const isFunction: (value: unknown) => value is Function;
/**
 * Returns true if the value is a valid Date instance.
 *
 * Invalid dates, `null`, and `undefined` return false.
 */
declare const isDate: (value: unknown) => value is Date;
/**
 * Returns true if the value is a RegExp instance.
 */
declare const isRegExp: (value: unknown) => value is RegExp;
/**
 * Returns true if the value is a Promise.
 */
declare const isPromise: (value: unknown) => value is Promise<unknown>;
/**
 * Returns true if the value is an Error-like object.
 */
declare const isError: (value: unknown) => value is Error;
/**
 * Returns true if the value is a non empty string containing at least one non white space character.
 *
 * Empty strings, strings containing only white space, `null`, and `undefined` return false.
 */
declare const isStringWithValue: (value: unknown) => value is string;
/**
 * Returns true if the value is a FormData instance.
 */
declare const isFormData: (value: unknown) => value is FormData;
/**
 * Returns true if the value is a Blob instance.
 */
declare const isBlob: (value: unknown) => value is Blob;
//#endregion
export { isArray, isBigInt, isBlob, isBoolean, isDate, isDefined, isError, isFormData, isFunction, isInteger, isNull, isNullish, isNumber, isPlainObject, isPromise, isRegExp, isString, isStringWithValue, isSymbol, isUndefined };
//# sourceMappingURL=index.d.ts.map