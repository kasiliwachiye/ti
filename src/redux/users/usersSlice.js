import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const usersURL = `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users`;

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(usersURL);
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
        `https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/user/${payload.id}`,
        payload,
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
        state.isLoading = true;
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
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const loadingState = (state) => state.users.isLoading;
export default usersSlice.reducer;
