/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../store/product/service";

export const getAll = createAsyncThunk("feat/getAllProduct", async () => {
  try {
    const response = await httpService.get("/Project-Akhir");
    return response.data;
  } catch (error) {
    throw error;
  }
});
