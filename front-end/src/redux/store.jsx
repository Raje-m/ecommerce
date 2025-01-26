import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { ProductApi } from './fetchProducts'
import  cartReducer  from './cartSlice'

export const store = configureStore( {
  reducer: {
    [ ProductApi.reducerPath ]: ProductApi.reducer,
    cartSlice:cartReducer
  },
  middleware: ( getDefaultMiddleware ) =>
    getDefaultMiddleware().concat( ProductApi.middleware ),
} )

setupListeners( store.dispatch )