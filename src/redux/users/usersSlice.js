import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    "x-apikey": "63be7360969f06502871ad7f",
  },
};

const usersURL = `https://touchinspiration-0ada.restdb.io/rest/sample`;

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(usersURL, config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (payload) => {
    try {
      const { data } = await axios.patch(
        `https://touchinspiration-0ada.restdb.io/rest/sample/${payload.id}`,
        payload,
        config
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

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
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload.id
        );
        state[index] = {
          ...state[index],
          ...action.payload,
        };
        state.isLoading = false;
      });
  },
});

export default usersSlice.reducer;
