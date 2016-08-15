# tradingpost-fees

[![Build Status](https://img.shields.io/travis/gw2efficiency/tradingpost-fees.svg?style=flat-square)](https://travis-ci.org/gw2efficiency/tradingpost-fees)
[![Coverage Status](https://img.shields.io/codecov/c/github/gw2efficiency/tradingpost-fees/master.svg?style=flat-square)](https://codecov.io/github/gw2efficiency/tradingpost-fees)

> Tiny module to calculate the fees of the tradingpost on GW2

*This is part of [gw2efficiency](https://gw2efficiency.com). Please report all issues in [the central repository](https://github.com/gw2efficiency/issues/issues).*

## Install

```
npm install gw2e-tradingpost-fees
```

This module can be used for Node.js as well as browsers using [Browserify](https://github.com/substack/browserify-handbook#how-node_modules-works).

## Usage

```js
import {subFees, subTax, subListing} from 'gw2e-tradingpost-fees'

// Subtract both the 5% listing fee and the 10% tax
subFees(100000)
// -> 85000

// Subtract the 10% tax
subTax(100000)
// -> 90000

// Subtract the 5% listing fee
subListing(100000)
// -> 95000
```

> But why not just `price * 0.85`?

Because that's not how it works ingame. It is missing that there is a minimum of 
1 copper for the listing fee as well as propper rounding. Yes, that makes a difference
for cheap items.

## Tests

```
npm test
```

## Licence

MIT
