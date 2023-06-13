import React, {useState, useEffect} from 'react'

import './Products.css'
import fectchProducts from '../../api/fectchProduct'
import ProductsCard from '../ProductsCard/ProductsCard'


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
        products.map((product) => <ProductsCard key={product.id} data = {product}/>
        )
      }



    </section>
  )
}


export default Products