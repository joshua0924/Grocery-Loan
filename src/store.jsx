import { configureStore  } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import popularProductsSlice from './reducers/popularProductsSlice';
import receiptSlice from './reducers/receiptSlice';
import userReducer from './reducers/usersAPI';


const store = configureStore({
  reducer: {
  
    products: productSlice,
    popularProducts: popularProductsSlice,
    receipt: receiptSlice,
    user: userReducer,
 
    
  }
});

export default store;