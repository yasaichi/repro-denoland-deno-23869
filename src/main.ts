import { Option } from 'effect';

// The following line is not resolved correctly and inferred as `any` in Deno v1.43.0 or later.
Option.isOption;

// I think that the line `export * as Option from "./Option.js";` is the cause
// because I could resolve it by manually changing `./Option.js` to `./Option.d.ts`.
