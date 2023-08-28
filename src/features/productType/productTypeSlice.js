import { createSlice } from '@reduxjs/toolkit';

export const productTypeSlice = createSlice({
  name: 'productType',
  initialState: {
    opened: false,
		type: 'Choose type',
  },
  reducers: {
    select: (state, action) => {
      state.type = action.payload;
    },
		openDropdown: (state) => {
			state.opened = !state.opened;
		}
  },
});

export const { select, openDropdown } = productTypeSlice.actions;

export default productTypeSlice.reducer;
