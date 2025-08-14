import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IAddToCartPayload,
  ICartInitialState,
  IChangeQuantityPayload,
} from './cart.types';

const initialState: ICartInitialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const isExists = state.items.some(
        (item) => item.product.id === action.payload.product.id,
      );

      if (!isExists) {
        state.items.push({
          ...action.payload,
          id: String(Date.now()),
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;
      const item = state.items.find((item) => item.id === id);

      if (item) {
        if (type === 'plus') item.quantity++;
        else if (item.quantity > 1) item.quantity--;
        else state.items = state.items.filter((i) => i.id !== id);
      }
    },
    reset: (state) => {
      state.items = [];
    },
  },
});
