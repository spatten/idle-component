import React from 'react'
import PropTypes from 'prop-types'

const suffixes = ['k', 'M', 'B', 'T', 'Qi', 'Qa', 'Sx', 'Sp']

function BigNum ({ number }) {
  if (number < 1000000) {
    const nf = new Intl.NumberFormat('en')
    return <>{nf.format(number)}</>
  }
  const nf = new Intl.NumberFormat('en', { maximumSignificantDigits: 3 })
  const exp = Math.floor(Math.log10(number) / 3)
  const coefficient = nf.format(number / 10 ** (exp * 3))
  const suffix = suffixes[exp - 1]
  const numString = `${coefficient}${suffix}`
  return <>{numString}</>
}

BigNum.propTypes = {
  number: PropTypes.number
}

export default BigNum
