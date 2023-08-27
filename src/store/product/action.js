/* eslint-disable no-useless-catch */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getAll = createAsyncThunk("feat/getAllProduct", async () => {
  try {
    const response = await httpService.get('/product');
    return response.data;
  } catch (error) {
    throw error;
  }
});
