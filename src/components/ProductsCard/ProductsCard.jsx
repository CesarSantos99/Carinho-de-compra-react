import React from 'react'
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'

import './ProductsCard.css'
import formartCurrency from '../../utils/formartCurrency'

function ProductsCard({ data }) {

  const { title, thumbnail, price } = data

  return (
    <section className="products-card">

      <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="products" className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">{formartCurrency(price)}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>

    </section>
  )
}

export default ProductsCard

ProductsCard.propTypes = {
  data: propTypes.shape({})
}.isRequired



