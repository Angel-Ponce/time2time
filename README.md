<h1 align="center">Time 2 Time 🕰️</h1>

<p align="center">Simple utilities to handle time conversions (zero dependencies)</p>

<p align="center">
<a href="https://angel-ponce.github.io/time2time-demo/" target="_blank">
See Playground</a>
</p>

## Table of contents

- [Installation](#installation-)
- [Usage](#usage-)
- [Types](#types-)
- [API Reference](#api-reference-)
- [Contributions](#contributions-)

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
