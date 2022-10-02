import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
     name: '',
     gender: '',
    },
    score: 0,
  },
  reducers: {
    register: (state, action) => {
      state.userInfo = action.payload;
    },
    setScore: (state) => {
     state.score = state.score + 1
    },
    resetScore: (state) => {
     state.score = 0
    }
  },
});

export const { register, resetScore, setScore } = userSlice.actions;
export default userSlice.reducer;
