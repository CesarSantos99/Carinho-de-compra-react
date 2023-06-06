import React, {useState, useEffect} from 'react'

import './Products.css'
import fectchProducts from '../../api/fectchProduct'


function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fectchProducts('iphone').then((response) => {

      setProducts(response)

    })

  },[])

  console.log(products)

  return (
    <section className="products containe">
      {
        products.map((product) => <p key={product.title}>{product.title} </p>)
      }
    </section>
  )
}


export default Products