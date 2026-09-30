# cartTotal


A small shopping-cart total calculator in plain JavaScript (ESM).
**No dependencies**, tests run on Node's built-in `node:test`.

Built for CSC13008 · IA#1 — the point of the exercise is the harness
(rules file, gates, CI) around the code, not only the code itself.

## Quick start

Requires **Node 22+**.

```bash
npm test         # run the tests
npm run lint     # syntax check (node --check)
```

## Usage

```js
import { cartTotal } from './src/cart.js'

const items = [
  { name: 'Áo thun', price: 180000, qty: 2 },
  { name: 'Sổ tay', price: 45000, qty: 1 },
]
const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

cartTotal(items, options) // => 467400
```

## Specification

`cartTotal(items, options)` in `src/cart.js`.

| Input | Shape |
|---|---|
| `items` | `[{ name, price, qty }]` |
| `options` | `{ vatRate, freeShipFrom, shipFee }` |

**Calculation**

- `subtotal` = sum of `price × qty`
- `VAT` = `subtotal × vatRate`
- `shipping` = `0` when `subtotal >= freeShipFrom`, otherwise `shipFee`
- `total` = `subtotal + VAT + shipping`, rounded to the whole đồng with `Math.round`
- the result is always a **number** (never a string, so no `toFixed`)

**Rules and edge cases**

| Case | Result |
|---|---|
| empty cart | returns `0` (no VAT, no shipping) |
| `subtotal` exactly equals `freeShipFrom` | shipping is `0` |
| `price` is negative | throws `RangeError` |
| `qty` is not a positive integer (`0`, `1.5`, `-1`) | throws `RangeError` |

**Worked example**

| Step | Value |
|---|---|
| subtotal: 2 × 180000 + 1 × 45000 | 405000 |
| VAT 8% | 32400 |
| shipping (405000 is below 500000) | 30000 |
| **total** | **467400** |

## Project structure

```
.
├── src/cart.js                        # cartTotal implementation
├── test/cart.test.js                  # 7 tests, node:test only
├── .github/
│   ├── copilot-instructions.md        # rules file for the assistant
│   └── workflows/ci.yml               # CI: npm test + npm run lint on every push
├── BRIEF.md                           # the brief given to the assistant
├── AI-LOG.md                          # what the assistant did, what I changed and wrote
├── SELF_ASSESSMENT_REPORT.md          # self-scoring against the rubric
└── package.json
```

## The harness

Everything that checks the code without a human in the loop:

| Gate | Command | What it catches |
|---|---|---|
| Tests | `npm test` | behaviour that broke |
| Lint | `npm run lint` | syntax errors in `src/cart.js` |
| CI | GitHub Actions on every push | "it works on my machine" |

The rules file (`.github/copilot-instructions.md`) lists the stack,
commands and the "never" list (no new packages, no `toFixed`, only touch
`src/cart.js` and `test/cart.test.js`).

## Known limitations

These are outside the current spec and were deliberately left as they are:

- if `items` is not an array, `cartTotal` returns `0` instead of throwing
- a `price` of `null` or `""` is coerced to `0` by `Number()` and is not rejected
- the lint gate is only `node --check`, not a full linter, to keep zero dependencies