import React, { useEffect } from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req'
import SortSales from '../../components/FilterForms/SortSales'
import s from './style.module.css'

export default function AllSales() {

    const allProducts = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
  
    useEffect(() => dispatch(getAllProducts),[dispatch])
  
    const allSalesProducts = allProducts.filter(el => el.discont_price)
  
    console.log(allSalesProducts);
  
    return (
      <div>
         <h1 className={s.all_pro}>All Sales</h1>
        <SortSales />
        <ProductsContainer products={allSalesProducts} productsStyle={true}/>
      </div>
    )
  }
