import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {signin as signinApi} from '../api/authApi';

const initialState = {
  isLogged: false,
  token: '',
  user: {},
};

export const signin = createAsyncThunk('auth/signin', async user => {
  const {data} = await signinApi(user);
  return data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLogged = false;
      state.token = '';
      state.user = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(signin.fulfilled, (state, {type, payload}) => {
      state.isLogged = true;
      state.token = payload.token;
      state.user = payload.user;
    });
  },
});

export const selectIsLogged = state => state.auth.isLogged;
export const {logout} = authSlice.actions;
export default authSlice.reducer;
