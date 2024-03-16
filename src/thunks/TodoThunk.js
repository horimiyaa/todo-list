import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../api/axiosInstance";

export const getTodo = createAsyncThunk(
  "todo/getTodo",
  async (_, { rejectWithValue }) => {
    try {
      const data = axiosInstance.get("/todo");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
