# Brief: cartTotal

Implement cartTotal(items, options) in src/cart.js. Plain JavaScript (ESM), no dependencies.

## Files
May touch: src/cart.js, test/cart.test.js.
Must not touch: package.json, .github/, anything else.

## Contract
- items: array of { name, price, qty }
- options: { vatRate, freeShipFrom, shipFee }
- subtotal = sum of price * qty
- VAT = subtotal * vatRate
- shipping = 0 if subtotal >= freeShipFrom, otherwise shipFee
- total = subtotal + VAT + shipping, rounded to whole dong with Math.round
- returns a number (never a string, do not use toFixed)
- empty cart returns 0 (no VAT, no shipping)

## Error cases
- price < 0 throws RangeError
- qty that is not a positive integer (0, 1.5, -1) throws RangeError

## Constraints
- No dependencies. Tests use node:test and node:assert/strict only.
- Do not invent any library or function.

## Done when
npm test is green and includes tests for: the worked example (467400),
empty cart, exactly-at-threshold, negative price, non-integer qty.
Worked example: items [{price:180000,qty:2},{price:45000,qty:1}],
options {vatRate:0.08, freeShipFrom:500000, shipFee:30000} => 467400.