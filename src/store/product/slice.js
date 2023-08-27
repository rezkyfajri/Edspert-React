import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "./action";
export const productSlice = createSlice({
  name: 'product',
  initialState: {
    loading: false,
    entities: [],
    entity: {
      id: '',
      type:'',
      title: '',
      desc: '',
      batch: '',
      mentor: '',
      price: '',
      discount: '',
    },
    error: null,
  },
  extraReducer: (builder) =>
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.entities = payload;
      })
      .addCase(getAll.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});
export default productSlice.reducer;
