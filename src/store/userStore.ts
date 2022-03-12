import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

export type UserState = {
  user: User | null;
};

const initialState: UserState = {
  user: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => ({
      ...state,
      user: action.payload,
    }),
    removeUser: (state) => ({ ...state, user: null }),
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
