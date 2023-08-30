import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    id: null,
  },
  reducers: {
    openProductIdList: (state, action) => {
      state.id = action.payload;
    },
    closeProductIdList: (state) => {
      state.id = null;
    },
  },
});

export const { openProductIdList, closeProductIdList } = orderSlice.actions;

export default orderSlice.reducer;
