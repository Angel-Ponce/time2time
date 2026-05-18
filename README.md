<h1 align="center">Time 2 Time 🕰️</h1>

<p align="center">Simple utilities to handle time conversions (zero dependencies)</p>

<p align="center">
<a href="https://angel-ponce.github.io/time2time-demo/" target="_blank">
See Playground</a>
</p>

## Table of contents

- [Why](#why-)
- [Installation](#installation-)
- [Usage](#usage-)
- [Types](#types-)
- [API Reference](#api-reference-)
- [Contributions](#contributions-)

## Why? 🤔

This package seems unnecessary, there is nothing of difficult to parse a time unit into another, for example, parse minutes to seconds we only need to multiply the incoming minutes by 60, `1 minute` are `60 seconds` easy.

But, that's the key, convert time units is easy. This concept encourages a bad practices into large codebases;

You may encounter some of this patterns:

```typescript
const durationSeconds = 3600;
const durationHours = durationSeconds / 60 / 60; // 1 hour
```

or

```typescript
const ONE_MINUTE_SECONDS = 60;
const ONE_HOUR_MINUTES = 60;

const FIVE_HOURS_SECONDS = 5 * ONE_HOUR_MINUTES * ONE_MINUTE_SECONDS;
```

or

```typescript
setTimeout(() => {
  // some execution callback
}, 5000); // executes after 5 seconds...
```

So... 🤢.

With `time2time` you can improve your code and readability, lets see the same examples using this package.

```typescript
import { seconds } from "time2time";

const durationSeconds = 3600;
const durationHours = seconds(durationSeconds).to("hr");
```

or

```typescript
import { minutes, hours } from "time2time";

const ONE_MINUTE_SECONDS = minutes(1).to("sec");
const ONE_HOUR_MINUTES = hours(1).to("min");

const FIVE_HOURS_SECONDS = hours(5).to("sec");
```

or

```typescript
import { seconds } from "time2time";

setTimeout(() => {
  // some execution callback
}, seconds(5).to("ms")); // executes after 5 seconds...
```

## Installation 📦

```bash
$ npm install time2time
```

or

```bash
$ yarn add time2time
```

## Usage ✨

```typescript
import { seconds, minutes } from "time2time";

console.log(seconds(60).value); //60

console.log(seconds(60).to("min")); //1

console.log(minutes(3).to("sec")); //180
```

## Types 🦺

Time2Time was made with `TypeScript` ❤️ so, you can use available types as you need:

```typescript
import type { TimeUnit } from "time2time";

const unit: TimeUnit;
```

## API Reference 📃

| Item          | Description                            | Type                                                                 |
| ------------- | -------------------------------------- | -------------------------------------------------------------------- |
| TimeUnit      | Available time units to use            | `ns` , `us` , `ms` , `sec` , `min` , `hr` , `day`, `week`            |
| TimeConverter | Special function to convert time units | `(value: number) => {value: number: to: (unit: TimeUnit) => number}` |
| nanoSeconds   | Nanoseconds time converter             | TimeConverter                                                        |
| microSeconds  | Microseconds time converter            | TimeConverter                                                        |
| milliSeconds  | Milliseconds time converter            | TimeConverter                                                        |
| seconds       | Seconds time converter                 | TimeConverter                                                        |
| minutes       | Minutes time converter                 | TimeConverter                                                        |
| hours         | Hours time converter                   | TimeConverter                                                        |
| days          | Days time converter                    | TimeConverter                                                        |
| weeks         | Weeks time converter                   | TimeConverter                                                        |

## Contributions ✨

If you need to add more time units feel free to send a PR 🥰
