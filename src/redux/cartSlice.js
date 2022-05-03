const {createSlice} = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    amount: 0,
    products: [],
  },
  reducers: {
    addToCart: (state, {type, payload}) => {
      const exitsProduct = state.products.find(
        item => item._id === payload._id,
      );

      if (exitsProduct) {
        exitsProduct.quantity += +payload.quantity;
      } else {
        state.products.push({
          ...payload,
          quantity: +payload.quantity,
        });
      }

      state.amount += payload.quantity * payload.price;
    },
    increaseQuantity: (state, {type, payload}) => {
      const exitsCart = state.products.find(item => item.cartId === payload);
      state.amount += exitsCart.price;
      exitsCart.quantity++;
    },
    decreaseQuantity: (state, {type, payload}) => {
      const exitsCart = state.products.find(item => item.cartId === payload);

      state.amount -= exitsCart.price;
      if (exitsCart.quantity <= 1) {
        state.products = state.products.filter(item => item.cartId !== payload);
      } else {
        exitsCart.quantity--;
      }
    },
    finishOrder: state => {
      state.amount = 0;
      state.products = [];
    },
  },
});

export const {addToCart, increaseQuantity, decreaseQuantity, finishOrder} =
  cartSlice.actions;
export const selectCart = state => state.cart.products;
export const selectTotalPrice = state => state.cart.amount;
export default cartSlice.reducer;
