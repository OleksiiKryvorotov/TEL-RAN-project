import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { allProductsReducer } from './reducers/allProductsReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    allProducts: allProductsReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer
    // countCart: selectCartItemCount
       
});
  
export const store = createStore(rootReducer, applyMiddleware(thunk));