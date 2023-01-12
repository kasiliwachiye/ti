import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    "x-apikey": "63be7360969f06502871ad7f",
  },
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(
      `https://touchinspiration-0ada.restdb.io/rest/sample`,
      config
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
