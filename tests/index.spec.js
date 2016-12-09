/* eslint-env node, mocha */
import {expect} from 'chai'
import {subFees, subTax, subListing, listingFee, tax} from '../src/index'

describe('tradingpost-fees', () => {
  it('calculates the tradingpost fees correctly', () => {
    expect(subFees(100000)).to.equal(85000)
    expect(subTax(100000)).to.equal(90000)
    expect(subListing(100000)).to.equal(95000)
  })

  it('calculates the tradingpost fees for small numbers correctly', () => {
    expect(listingFee(2)).to.equal(1)
    expect(listingFee(16)).to.equal(1)
    expect(listingFee(31)).to.equal(2)

    expect(tax(2)).to.equal(1)
    expect(tax(10)).to.equal(1)
    expect(tax(16)).to.equal(2)
    expect(tax(31)).to.equal(3)
  })

  it('handles empty inputs gracefully', () => {
    expect(subFees(0)).to.equal(0)
    expect(subTax(0)).to.equal(0)
    expect(subListing(0)).to.equal(0)
    expect(listingFee(0)).to.equal(0)
    expect(tax(0)).to.equal(0)

    expect(subFees(false)).to.equal(false)
    expect(subTax(false)).to.equal(false)
    expect(subListing(false)).to.equal(false)
    expect(listingFee(0)).to.equal(0)
    expect(tax(0)).to.equal(0)

    expect(subFees(null)).to.equal(null)
    expect(subTax(null)).to.equal(null)
    expect(subListing(null)).to.equal(null)
    expect(listingFee(0)).to.equal(0)
    expect(tax(0)).to.equal(0)
  })
})
