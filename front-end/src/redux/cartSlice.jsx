import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productInCart: [],
}

export const cartSlice = createSlice( {
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: ( state, action ) =>
    {
      //if cart is empty add quantity=1
      if ( state.productInCart.length == 0 )
      {
        state.productInCart = [ { ...action.payload, quantity: 1 } ]
      }
      else
      {
        //if not empty check if product is exist or no  add quantity one
        const findProduct = state.productInCart.find( ele =>
        {
          return ele.id === action.payload.id
        } )
        if ( findProduct )
        {
          state.productInCart = state.productInCart.map( ele =>
          {
            return ele.id === action.payload.id ? { ...ele, quantity: ele.quantity += 1 } : ele
          } )
        }
        else
        {
          state.productInCart = [ ...state.productInCart, { ...action.payload, quantity: 1 } ]
        }

      }


    },
    delFromCart: ( state, action ) =>
    {
      //if i have more than one of this product i will del one by quantity-1 and if quantity==1 i will delete this product
      const productToDel = state.productInCart.find( product =>
      {
        return product.id === action.payload.id
      } )
      if ( productToDel.quantity > 1 )
      {
        const afterDel = state.productInCart.map( ele =>
        {
          return ele.id === action.payload.id ? { ...ele, quantity: ele.quantity -= 1 } : ele
        } )
        state.productInCart = afterDel
      }
      else
      {
        const afterDel = state.productInCart.filter( product =>
        {
          return product.id !== action.payload.id
        } )
        state.productInCart = afterDel
      }
    },

    clearAll: ( state ) =>
    {
      state.productInCart = [];
    },
  },
} )

export const { addToCart, delFromCart, clearAll } = cartSlice.actions

export default cartSlice.reducer
