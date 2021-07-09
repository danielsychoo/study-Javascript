import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseData: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseData: (state) => {
      state.value -= 1;
    },
  },
});

export const { increaseData, decreaseData } = counterSlice.actions;
