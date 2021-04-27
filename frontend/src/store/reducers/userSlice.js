import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    id: undefined,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.id = undefined;
      state.email = undefined;
      state.firstName = undefined;
      state.lastName = undefined;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
