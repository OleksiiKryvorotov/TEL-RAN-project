import React from 'react'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function ProductCard({ id, title, image, price, discont_price}) {

  const dispatch = useDispatch()
  const countDiscont =  Math.round(discont_price ? ((price - discont_price ) / price * 100) : 0)
 

  return (
    <div className={s.card_item}>
      <Link to={`/products/${id}`}>
        <div className={s.card}>
          <img src={`http://localhost:3333${image}`} alt={title} />
        </div>

        <div className={s.price_info}>
            {discont_price && discont_price > 0 ? (
            <p>
              {discont_price.toFixed(2)}$			      
			      <span className={s['discounted-price']}>{price.toFixed(2)}$</span>
            </p>
            ):
            (
            <p>{price.toFixed(2)}$</p>
            )}
            {countDiscont !== null && countDiscont > 0 && <p>{countDiscont}%</p>}
        </div>             

            <p>{ title }</p>               
        
      </Link> 
         <div
           className={s.add_btn}
           onClick={() => dispatch(addToCartAction({ id, title, image, price, discont_price }))}
         >
           Add to Cart
        </div> 
    </div>    
  )
}





