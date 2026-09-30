export function cartTotal(items = [], options = {}) {
  const normalizedItems = Array.isArray(items) ? items : []

  if (normalizedItems.length === 0) {
    return 0
  }

  const vatRate = Number(options?.vatRate ?? 0)
  const freeShipFrom = Number(options?.freeShipFrom ?? 0)
  const shipFee = Number(options?.shipFee ?? 0)

  let subtotal = 0

  for (const item of normalizedItems) {
    const price = Number(item?.price)
    const qty = Number(item?.qty)

    if (!Number.isFinite(price) || price < 0) {
      throw new RangeError('Price must be a non-negative number')
    }

    if (!Number.isInteger(qty) || qty <= 0) {
      throw new RangeError('Qty must be a positive integer')
    }

    subtotal += price * qty
  }

  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
