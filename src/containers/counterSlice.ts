import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CounterSlice {
  value: number
}

const initialState: CounterSlice = {
  value: 0
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    add: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    subtract: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    }
  }
});

export const counterReducer = counterSlice.reducer;
export const {increment, decrement, add, subtract} = counterSlice.actions;