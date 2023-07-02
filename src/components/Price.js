import React from 'react'
import product from '../product.js'

const Price = () => {
    const price = product.price
  return (
    <span>{price}</span>
  )
}

export default Price