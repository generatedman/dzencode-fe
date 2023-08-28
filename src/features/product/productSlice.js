import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    id: null
  },
  reducers: {
    choose: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { choose } = productSlice.actions;

export default productSlice.reducer;
