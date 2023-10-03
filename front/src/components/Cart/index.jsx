import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem'
import s from './style.module.css'
import { clearCartAction } from '../../store/reducers/cartReducer'
import { sendOrder } from '../../requests/products_req'

export default function Cart() {

    const cart_state = useSelector(state => state.cart)

    const dispatch = useDispatch()
    
    // Счетчик товаров в корзине:
  //   const itemCount = cart_state.reduce((acc, { count }) => {
  //     return acc + count;
  // }, 0);
  //--------------------------------------

    const total = cart_state.reduce((acc,  {price, discont_price, count}) => {
    const totalPrice = discont_price ? discont_price : price    
      return acc + totalPrice * count} , 0)

    const [phoneNumber, setPhoneNumber] = useState(''); 

    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Вы можете здесь выполнить необходимые действия с номером телефона,
      // например, отправить его на сервер для обработки.
      // alert(`Заказ размещен с номером телефона: ${phoneNumber}`);

      sendOrder()
      e.target.reset()
  };

  return (    
    <div className={s.cart_cont}>
    <h1 className={s.title_cart}>Shopping cart</h1>
    
    <div>
      <div className={s.cart_cont}>       
        {cart_state.length > 0
          ? cart_state.map((el) => <CartItem key={el.id} {...el} />)
          : <p className={s.empty}>Your cart is empty.</p>}
   
     
       {cart_state.length > 0 && (
        <form onSubmit={handleSubmit} className={s.order}>
          <h2>Order details</h2>
          <p>Total {total.toFixed(2)}$</p>      

          <div className={s.pfon_ord}>
            <input
              type="number"
              placeholder="Phone number"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
          />
            <button type="submit">Order</button>
          </div>
        </form>                
          )}

        {/* <p>{itemCount}</p> */}

        </div>
      </div>
      
         {cart_state.length > 0 && (
        <div className={s.clear_btn} onClick={() => dispatch(clearCartAction())}>
          Clear cart
        </div>
      )}
      
    </div>
  );
}