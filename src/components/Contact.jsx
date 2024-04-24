import React from 'react'
import productsArr from '../data'

const Contact = () => {
  return (
    
    <>
    {
      productsArr.map((product)=>
      <li key={product.id}>{product.name} and {product.price}</li>)

    }
    </>
  )
}

export default Contact
