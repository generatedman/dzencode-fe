import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import productReducer from '../features/product/productSlice';
import productTypeReducer from '../features/productType/productTypeSlice';
import orderReducer from '../features/order/orderSlice';

export default configureStore({
  reducer: {
    products: productsReducer,
		product: productReducer,
		productType: productTypeReducer,
		order: orderReducer,
  },
});
