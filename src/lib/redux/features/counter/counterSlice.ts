import { createSlice } from '@reduxjs/toolkit';

// 단계별 목록
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.count = action.payload;
    },
  },
});

export const { setCounter } = counterSlice.actions;
export default counterSlice.reducer;
