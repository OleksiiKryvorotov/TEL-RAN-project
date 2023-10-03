import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from '../CategoryCard';
import s from './style.module.css'

export default function CategoriesContainer() {

  const categories_state = useSelector(state => state.categories);

  // console.log(categories_state);
  return (
    <div className={s.container}>
      {
        categories_state.map(el => <CategoryCard key={el.id} {...el} />)
      }
    </div>
  )
}
