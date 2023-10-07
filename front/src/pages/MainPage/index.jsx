import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CategoriesContainer from '../../components/CategoriesContainer'
import ProductsContainer  from '../../components/ProductsContainer'
import s from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNewProductSale, getAllProducts } from '../../requests/products_req'
import bush from '../../Media/bush.png'
import gnome from '../../Media/gnome.png'
import {useForm} from 'react-hook-form'

export default function MainPage() {

const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onChange'
});

const phoneNumberRegister = register('phoneNumber', {
  required: "*This field is required",
  pattern: {
      value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
      message: '*Please, enter valid phone number'
  }
});

const submit = new_product_obj => {
  addNewProductSale(new_product_obj);
  reset()
}  

const dispatch = useDispatch()

useEffect(() => { dispatch(getAllProducts) }, [dispatch])


// RANDOM! -------------------------------

const all_products = useSelector(state => state.allProducts)
const products = all_products.filter(el => el.discont_price)
const get_random_products = () => {
  const first_three_products = [...products].sort(() => Math.random() - 0.5);
  return first_three_products.slice(0, 3)
} 

const random_products = get_random_products();
//-------------------------------------------------

  return (
    <div className={s.wrapper}>  
      <div className={s.sale_container}> 
          <div className={s.text}>
             <p>Sale</p>
             <p>New season</p> 
             <Link to={'/sales'} className={s.sale_btn}>
               Sale
             </Link>
          </div>            

          <div className={s.bush}>
                <img src={bush} alt='Bush' />
          </div>        
      </div>



      <div className={s.catalog_container}>
        <div className={s.btn_container}>
          <h1>Catalog</h1>
          <Link to='/categories' >
            <div className={s.btn_cat}>All categories</div>
          </Link>
        </div>
        <CategoriesContainer />
      </div>



      <div className={s.dwarf_wrapper}>
        <img src={gnome} alt="Gnome" />
        <div className={s.discount_descr}>
          <h1>5% off</h1>
          <h2>on the first order</h2>
          <form  className={s.phone_num} onSubmit={handleSubmit(submit)}>
              <input type="text"
                    placeholder=' +49' name='phonenumber'
                    {...phoneNumberRegister}
              />

                     {errors.phoneNumber && <p className={s.error_msg}>{errors.phoneNumber?.message}</p>}
               <button className={s.discount_btn}>Get a discount</button>
          </form>
        </div>
      </div>



      <div className={s._sale_container}>
        <h1>Sale</h1>
        <div>
          <ProductsContainer products={random_products} category_show={false}/> 
        </div>
      </div>

    </div>    

  )
}
