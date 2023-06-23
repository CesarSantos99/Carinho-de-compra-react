import React, {useEffect, useContext} from 'react'

import './Products.css'
import ProductsCard from '../ProductsCard/ProductsCard'
import Loading from '../Loading/Loading'
import fectchProducts from '../../api/fetchProduct'
import AppContext from '../../context/AppContext'


function Products() {

  const {products, setProducts, loading, setLoading} = useContext(AppContext)

  useEffect(() => {

    fectchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)

    })

  },[])

  return (

    (loading && <Loading/>) || (
      <section className="products containe">
        {products.map((product) => <ProductsCard key={product.id} data = {product}/>)}
      </section>)  
  )
}


export default Products