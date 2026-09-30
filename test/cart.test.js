import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0', () => {
  assert.equal(cartTotal([], { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }), 0)
})

test ('free shipping when subtotal equals the threshold', () => {
  const items = [{ name: 'Item', price: 500000, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items,options), 500000)
})

test('negative price throws RangeError', () => {
  const items = [{ name: 'Bad item', price: -1000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('non-integer qty throws RangeError', () => {
  const items = [{ name: 'Bad item', price: 1000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('qty 0 throws RangeError', () => {
  const items = [{ name: 'Bad item', price: 1000, qty: 0}]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 } 
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('shipping is charged just below the threshold', () => {
  const items = [{ name: 'Item', price: 499999, qty: 1}]
  const options = { vatRate: 0, freeShipFrom: 500000, shipFee: 30000}
  assert.equal(cartTotal(items, options), 529999)
})