# @chriscdn/type-guards

Small, dependency free TypeScript type guards for the checks you write over and over. Each function is a plain `(value) => boolean` that also narrows the type.

## Install

```bash
npm install @chriscdn/type-guards
```

## Usage

```ts
import { isString, isDefined, isPlainObject } from "@chriscdn/type-guards";

function greet(name: unknown) {
  if (!isString(name)) {
    throw new Error("name must be a string");
  }

  // `name` is now typed as `string`
  return `Hello, ${name}!`;
}
```

## API

| Function                   | Returns true for                                             |
| -------------------------- | ------------------------------------------------------------ |
| `isDefined(value)`         | Anything that is **not** `null` or `undefined`               |
| `isUndefined(value)`       | Exactly `undefined`                                          |
| `isNull(value)`            | Exactly `null`                                               |
| `isNullish(value)`         | `null` **or** `undefined`                                    |
| `isString(value)`          | Strings                                                      |
| `isStringWithValue(value)` | Strings with content (not empty, not just whitespace)        |
| `isInteger(value)`         | Finite, whole numbers                                        |
| `isNumber(value)`          | Finite numbers (excludes `NaN`, `Infinity`, `-Infinity`)     |
| `isArray(value)`           | Arrays                                                       |
| `isArrayOf(value, cb)`     | Arrays where every element satisfies the provided type guard |
| `isPlainObject(value)`     | Plain `{ }` objects, not arrays, not class instances         |
| `isBoolean(value)`         | Booleans                                                     |
| `isBigInt(value)`          | BigInts                                                      |
| `isSymbol(value)`          | Symbols                                                      |
| `isFunction(value)`        | Functions                                                    |
| `isDate(value)`            | Valid `Date` instances (invalid dates return `false`)        |
| `isRegExp(value)`          | `RegExp` instances                                           |
| `isPromise(value)`         | `Promise` instances                                          |
| `isError(value)`           | `Error` instances                                            |
| `isFormData(value)`        | `FormData` instances                                         |
| `isBlob(value)`            | `Blob` instances                                             |

Most of these do exactly what their name suggests. A few are worth a closer look:

### `isDefined`

"Defined" here means "not nullish." It's the opposite of `isNullish`. Use it when you want to filter out both `null` and `undefined` in one go:

```ts
const values: (string | null | undefined)[] = ["a", null, "b", undefined];
const strings: string[] = values.filter(isDefined); // ["a", "b"]
```

### `isUndefined`

Checks for the literal value `undefined`. The value `null` will return `false` here, since it's a different value entirely. If you want to catch both, use `isNullish` instead.

### `isNullish`

Shorthand for "is `null` or `undefined`." This mirrors what JavaScript's `==` (loose equality) treats as equivalent to `null`.

### `isStringWithValue`

A stricter version of `isString`. Plain `isString("")` and `isString("   ")` both return `true`, since they _are_ strings, after all. `isStringWithValue` goes a step further and checks that there's actual content once whitespace is trimmed away. Useful when an empty or blank string should be treated the same as "no value":

```ts
isString("   "); // true
isStringWithValue("   "); // false

isStringWithValue("hi"); // true
```

## License

[MIT](LICENSE)
