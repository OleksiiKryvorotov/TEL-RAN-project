import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../requests/products_req'
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function SingleProductPage() {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getSingleProduct(id)), [])

  const single_product_state = useSelector(state => state.singleProduct)

  const  {title, price, discont_price, description, image} = single_product_state
  
  // const categories_state = useSelector(state => state.categories);  
  
  return (
    <div className={s.product_item}>
       <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{title}</p>        
        <p>Price: {price}$</p>  
        <p className={s.dis_pr}>{discont_price > 0 ?         
        (<p>Discount: {discont_price.toFixed(2)}$</p>) :
         ''}</p>
        <p>Description: {description}</p>
        <div className={s.add_btn}
       onClick={() => dispatch(addToCartAction({ id, title, image, price, discont_price }))}
        > 
         Add to Cart
        </div>  
      </div>
    </div>
  )
}
