//#region src/index.ts
/**
* Returns true if the value is neither `null` nor `undefined`.
*/
const isDefined = (value) => value !== null && value !== void 0;
/**
* Returns true if the value is exactly `undefined`.
*/
const isUndefined = (value) => value === void 0;
/**
* Returns true if the value is exactly `null`.
*/
const isNull = (value) => value === null;
/**
* Returns true if the value is either `null` or `undefined`.
*/
const isNullish = (value) => isNull(value) || isUndefined(value);
/**
* Returns true if the value is a string.
*/
const isString = (value) => typeof value === "string";
/**
* Returns true if the value is a finite number with an integer value.
*/
const isInteger = (value) => typeof value === "number" && Number.isInteger(value);
/**
* Returns true if the value is a finite number.
*/
const isNumber = (value) => typeof value === "number" && Number.isFinite(value);
/**
* Returns true if the value is an array.
*/
const isArray = (value) => Array.isArray(value);
/**
* Returns true if the value is a plain object.
*
* Arrays, class instances, `null`, and `undefined` return false.
*/
const isPlainObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
/**
* Returns true if the value is a boolean.
*/
const isBoolean = (value) => typeof value === "boolean";
/**
* Returns true if the value is a bigint.
*/
const isBigInt = (value) => typeof value === "bigint";
/**
* Returns true if the value is a symbol.
*/
const isSymbol = (value) => typeof value === "symbol";
/**
* Returns true if the value is a function.
*/
const isFunction = (value) => typeof value === "function";
/**
* Returns true if the value is a valid Date instance.
*
* Invalid dates, `null`, and `undefined` return false.
*/
const isDate = (value) => value instanceof Date && !Number.isNaN(value.getTime());
/**
* Returns true if the value is a RegExp instance.
*/
const isRegExp = (value) => value instanceof RegExp;
/**
* Returns true if the value is a Promise.
*/
const isPromise = (value) => value instanceof Promise;
/**
* Returns true if the value is an Error-like object.
*/
const isError = (value) => value instanceof Error;
/**
* Returns true if the value is a non empty string containing at least one non white space character.
*
* Empty strings, strings containing only white space, `null`, and `undefined` return false.
*/
const isStringWithValue = (value) => isString(value) && value.trim() !== "";
/**
* Returns true if the value is a FormData instance.
*/
const isFormData = (value) => value instanceof FormData;
/**
* Returns true if the value is a Blob instance.
*/
const isBlob = (value) => value instanceof Blob;
//#endregion
export { isArray, isBigInt, isBlob, isBoolean, isDate, isDefined, isError, isFormData, isFunction, isInteger, isNull, isNullish, isNumber, isPlainObject, isPromise, isRegExp, isString, isStringWithValue, isSymbol, isUndefined };

//# sourceMappingURL=index.js.map