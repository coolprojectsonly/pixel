"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


import { getPhotos } from "./action";


const createReducer = createSlice({
  name: "post",
  initialState: {
    status: "idle",
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getPhotos.rejected, (state) => {
        state.status = "failed";
        state.error = "error";
      });
  },
});

export default createReducer;
