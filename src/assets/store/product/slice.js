import { createSlice } from "@reduxjs/toolkit";
import getAll from "../../utils/action";
export const productSlice = createSlice({
  nama: "product",
  initialState: {
    loading: false,
    entities: [],
    entity: {
      id: "",
      type: "",
      title: "",
      desc: "",
      batch: "",
      mentor: "",
      price: "",
      discount: "",
    },
    error: null,
  },
  extraReducer: (builder) =>
    builder
      .addcase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addcase(getAll.fulfiled, (state, { payload }) => {
        state.loading = false;
        state.entity = payload;
      })
      .addcase(getAll.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),
});
export default productSlice.reducer;
