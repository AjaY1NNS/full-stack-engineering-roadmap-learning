// Advanced TypeScript

// 24. Mapped Types
// Mapped types let you create new types by transforming each property in an existing type.
// Syntax: { [K in keyof T]: NewType }

type Readonly2<T> = {
    readonly [K in keyof T]: T[K];
};

type Optional<T> = {
    [K in keyof T]?: T[K];
};

type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

interface UserProfile {
    id: number;
    name: string;
    email: string;
}

type ReadonlyUser = Readonly2<UserProfile>;
type OptionalUser = Optional<UserProfile>;
type NullableUser = Nullable<UserProfile>;

// Mapped type with value transformation
type Stringify<T> = {
    [K in keyof T]: string;
};
type StringifiedUser = Stringify<UserProfile>; // { id: string; name: string; email: string }

// Removing modifiers with '-' prefix
type Mutable<T> = {
    -readonly [K in keyof T]: T[K]; // removes readonly
};
type Required2<T> = {
    [K in keyof T]-?: T[K]; // removes optional (?)
};


// 25. Conditional Types
// Conditional types choose a type based on a condition: T extends U ? X : Y

type IsString<T> = T extends string ? true : false;
type A = IsString<string>;  // true
type B = IsString<number>;  // false

// Distributive conditional types — applied to each member of a union
type NonNullable2<T> = T extends null | undefined ? never : T;
type C = NonNullable2<string | null | undefined>; // string

// Conditional type with function return type extraction
type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : never;
type D = ReturnType2<() => number>;       // number
type E = ReturnType2<(x: string) => boolean>; // boolean

// Nested conditional type
type Flatten<T> = T extends Array<infer Item> ? Item : T;
type F = Flatten<number[]>;  // number
type G = Flatten<string>;    // string


// 26. Indexed Access Types
// Access the type of a property using T[K] syntax.

interface Post {
    id: number;
    title: string;
    author: {
        name: string;
        email: string;
    };
    tags: string[];
}

type PostId = Post["id"];           // number
type PostTitle = Post["title"];     // string
type AuthorName = Post["author"]["name"]; // string — nested access
type TagItem = Post["tags"][number];     // string — array element type

// Indexed access with union of keys
type PostIdOrTitle = Post["id" | "title"]; // number | string

// keyof + indexed access pattern
type PostValues = Post[keyof Post]; // number | string | { name: string; email: string } | string[]


// 27. The `infer` Keyword
// `infer` declares a type variable inside a conditional type, letting TypeScript
// figure out and capture that type for you.

// Extract the first argument type from a function
type FirstArg<T> = T extends (first: infer F, ...rest: any[]) => any ? F : never;
type H = FirstArg<(a: string, b: number) => void>; // string

// Extract the element type from a Promise
type Awaited2<T> = T extends Promise<infer R> ? R : T;
type I = Awaited2<Promise<number>>; // number
type J = Awaited2<string>;         // string

// Extract constructor parameter types
type ConstructorParam<T> = T extends new (arg: infer P) => any ? P : never;
class Logger {
    constructor(public prefix: string) {}
}
type LoggerParam = ConstructorParam<typeof Logger>; // string

// Recursive infer — unwrap nested promises
type DeepAwaited<T> = T extends Promise<infer R> ? DeepAwaited<R> : T;
type K = DeepAwaited<Promise<Promise<number>>>; // number


// 28. Template Literal Types
// Template literal types build string types using template literal syntax.

type EventName = "click" | "focus" | "blur";
type HandlerName = `on${Capitalize<EventName>}`; // "onClick" | "onFocus" | "onBlur"

type CSSDirection = "top" | "right" | "bottom" | "left";
type CSSProperty = `margin-${CSSDirection}` | `padding-${CSSDirection}`;
// "margin-top" | "margin-right" | ... | "padding-left"

// Combining multiple unions — TypeScript generates the cross-product
type VerticalAlign = "top" | "middle" | "bottom";
type HorizontalAlign = "left" | "center" | "right";
type Alignment = `${VerticalAlign}-${HorizontalAlign}`;
// "top-left" | "top-center" | "top-right" | "middle-left" | ...

// Template literal types with generics
type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;
type PropGetter = Getter<"name" | "age">; // "getName" | "getAge"

// Extracting parts of a string type
type RouteParams<T extends string> =
    T extends `${string}:${infer Param}/${infer Rest}`
        ? Param | RouteParams<Rest>
        : T extends `${string}:${infer Param}`
            ? Param
            : never;
type Params = RouteParams<"/users/:id/posts/:postId">; // "id" | "postId"


// 29. Key Remapping (with `as` in mapped types)
// TypeScript 4.1+ allows remapping keys in mapped types using `as`.

// Rename keys — prefix every property name with "get"
type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type UserGetters = Getters<UserProfile>;
// { getId: () => number; getName: () => string; getEmail: () => string }

// Filter keys — use `never` to drop properties
type OnlyStrings<T> = {
    [K in keyof T as T[K] extends string ? K : never]: T[K];
};
type StringFields = OnlyStrings<UserProfile>; // { name: string; email: string }

// Remap to a different key value
interface EventMap {
    click: MouseEvent;
    focus: FocusEvent;
    keydown: KeyboardEvent;
}
type EventHandlers = {
    [K in keyof EventMap as `on${Capitalize<K>}`]: (event: EventMap[K]) => void;
};
// { onClick: (event: MouseEvent) => void; onFocus: ...; onKeydown: ... }

// Combine remapping with filtering
type ReadonlyStringKeys<T> = {
    [K in keyof T as T[K] extends string ? K : never]: Readonly<{ value: T[K] }>;
};


// 30. Declaration Files (.d.ts)
// Declaration files describe the shape of existing JavaScript code for TypeScript consumers.
// They contain ONLY type information — no runtime code.

// Typical patterns you write in a .d.ts file:

// Declare a module that has no TypeScript source (e.g. a plain JS library)
// declare module "my-js-lib" {
//     export function greet(name: string): string;
//     export const version: string;
// }

// Augment an existing module (module augmentation)
// declare module "express" {
//     interface Request {
//         currentUser?: { id: string; role: string };
//     }
// }

// Declare global variables added by a script tag or runtime environment
// declare const __APP_VERSION__: string;
// declare function trackEvent(name: string, data?: Record<string, unknown>): void;

// Declare a namespace (older JS library pattern)
// declare namespace MyLib {
//     function create(config: MyLib.Config): MyLib.Instance;
//     interface Config { timeout: number; retries: number; }
//     interface Instance { send(data: string): Promise<void>; }
// }

// Triple-slash reference — tells the compiler about another declaration file
// /// <reference types="node" />

// In practice:
// - `@types/` packages on npm are pre-built declaration files for popular JS libraries.
// - You rarely write .d.ts files by hand; `tsc --declaration` auto-generates them from .ts source.
// - When a package ships its own types, no @types/ package is needed.
