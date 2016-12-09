// Subtract both the 5% listing fee and the 10% tax
export function subFees (price) {
  if (!isValidPrice(price)) {
    return price
  }

  return Math.floor(price - listingFee(price) - tax(price))
}

// Subtract the 10% tax
export function subTax (price) {
  if (!isValidPrice(price)) {
    return price
  }

  return Math.floor(price - tax(price))
}

// Subtract the 5% listing fee
export function subListing (price) {
  if (!isValidPrice(price)) {
    return price
  }

  return Math.floor(price - listingFee(price))
}

// Check if a price is a valid number
function isValidPrice (price) {
  return Number.isInteger(price) && price > 0
}

// Listing fee is 5%, but min. 1 copper
export function listingFee (price) {
  if (!isValidPrice(price)) {
    return 0
  }

  return Math.max(Math.round(price * 0.05), 1)
}

// Tax is 10%, but min. 1 copper
export function tax (price) {
  if (!isValidPrice(price)) {
    return 0
  }

  return Math.max(Math.round(price * 0.1), 1)
}
