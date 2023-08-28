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
  },
});

export const { openProductIdList } = orderSlice.actions;

export default orderSlice.reducer;
