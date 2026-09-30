# Project rules

Stack: Node 22+, plain JavaScript (ESM, "type": "module"). No dependencies. Tests use node:test only.

Commands: npm test · npm run lint

Files: only edit src/cart.js and test/cart.test.js.

Spec for cartTotal(items, options):
- total = subtotal + VAT + shipping, rounded to whole dong with Math.round, returned as a number
- shipping is 0 when subtotal >= freeShipFrom
- empty cart returns 0
- negative price, or qty that is not a positive integer, throws RangeError

Never: install a package, edit package.json, round with toFixed, commit node_modules.
