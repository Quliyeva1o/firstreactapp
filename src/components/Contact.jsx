import React from 'react'
import productsArr from '../data'

const Contact = () => {
  return (
    
    <>
    {
      productsArr.map((product)=>
      <li>{product.name}</li>)

    }
    </>
  )
}

export default Contact
