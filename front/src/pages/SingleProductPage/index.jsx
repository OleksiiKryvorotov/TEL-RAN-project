import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleProduct } from '../../requests/products_req'
import { useParams } from 'react-router-dom'
import s from './style.module.css'
import { Link } from 'react-router-dom'
import { addToCartAction } from '../../store/reducers/cartReducer'

export default function SingleProductPage() {

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => dispatch(getSingleProduct(id)), [])

  const single_product_state = useSelector(state => state.singleProduct)

  // console.log(single_product_state);

  const  {title, price, discont_price, description, image, categoryId} = single_product_state
  
  const categories_state = useSelector(state => state.categories);
  // console.log(categories_state);
  
  // const category_name = categories_state.find(el => el.id === categoryId)
  
  
  return (
    <div className={s.product_item}>
       <img src={`http://localhost:3333${image}`} alt={title} />
      <div>
        <p>{title}</p> 
        {/* <Link to={`/categories/${categoryId}`}>
         <p className={s.category}>{category_name?.title}</p> 
        </Link>        */}
        <p>Price: {price}$</p>  
        <p>Discount: {discont_price}$</p>
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
