import React from 'react'
import { useSelector } from 'react-redux'
import ProductsContainer from '../../components/ProductsContainer'
import DiscountForm from '../../components/FilterForms/DiscountForm'
import s from './style.module.css'
// import SortForm from '../../components/FilterForms/SortForm'
// import FilterForm from '../../components/FilterForms/FilterForm'

export default function AllProductsPage() {

  const all_products_state = useSelector(state => state.allProducts)
  
  // console.log(all_products_state);

  return (
    
    <div>
      <h1 className={s.all_pro}>All Products</h1>
      {/* <FilterForm /> */}
      <DiscountForm />
      {/* <SortForm /> */}
      <ProductsContainer products={all_products_state} // category_show={true}  
      />
    </div>
  )
}

