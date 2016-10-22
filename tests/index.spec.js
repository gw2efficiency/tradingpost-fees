/* eslint-env node, mocha */
import {expect} from 'chai'
import {subFees, subTax, subListing} from '../src/index'

describe('tradingpost-fees', () => {
  it('calculates the tradingpost fees correctly', () => {
    expect(subFees(100000)).to.equal(85000)
    expect(subTax(100000)).to.equal(90000)
    expect(subListing(100000)).to.equal(95000)
  })

  it('handles empty inputs gracefully', () => {
    expect(subFees(0)).to.equal(0)
    expect(subTax(0)).to.equal(0)
    expect(subListing(0)).to.equal(0)

    expect(subFees(false)).to.equal(false)
    expect(subTax(false)).to.equal(false)
    expect(subListing(false)).to.equal(false)

    expect(subFees(null)).to.equal(null)
    expect(subTax(null)).to.equal(null)
    expect(subListing(null)).to.equal(null)
  })
})
