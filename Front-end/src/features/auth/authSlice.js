import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../api";

const initialState = {
  user: {},
  token: "",
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    let url = "/auth/register";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue({
      message: err.message,
      code: err.code,
      response: err.response ? {
        status: err.response.status,
        data: err.response.data,
      } : null,
    });
  }
});

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    let url = "/auth/login";
    const res = await http.post(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue({
      message: err.message,
      code: err.code,
      response: err.response ? {
        status: err.response.status,
        data: err.response.data,
      } : null,
    });
  }
});

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (email, { rejectWithValue }) => {
    try {
      const res = await http.post("auth/reset-password", { email });
      return res.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue({
        message: err.message,
        code: err.code,
        response: err.response ? {
          status: err.response.status,
          data: err.response.data,
        } : null,
      });
    }
  }
);

export const getUserProfile = createAsyncThunk("auth/getUserProfile", async (_, thunkAPI) => {
  try {
    let url = "/auth/profile";
    const res = await http.get(url);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue({
      message: err.message,
      code: err.code,
      response: err.response ? {
        status: err.response.status,
        data: err.response.data,
      } : null,
    });
  }
});

export const updateProfile = createAsyncThunk("auth/updateProfile", async (data, thunkAPI) => {
  try {
    let url = "/auth/profile";
    const res = await http.put(url, data);
    return res.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue({
      message: err.message,
      code: err.code,
      response: err.response ? {
        status: err.response.status,
        data: err.response.data,
      } : null,
    });
  }
});

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(state.user);
    },
    setUser: (state, action) => {
      const { user, token } = action.payload;
      console.log(user);
      state.user = user;
      state.token = token;
      // set local-storage
    },
    deleteUser: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message;
      });
  },
});

export const { getUser, setUser, deleteUser } = authSlice.actions;
export default authSlice.reducer;
