import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CalculatorSlice {
  value: number
  stringResult: string
}

const initialState: CalculatorSlice = {
  value: 0,
  stringResult: ''
};

export const calculatorSlice = createSlice({
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
    },
    reset: (state, action: PayloadAction<string>) => {
      state.stringResult = action.payload;
    },
    inputStr: (state, action: PayloadAction<string>) => {
      state.stringResult += action.payload;
    },
    result: (state) => {
      state.stringResult = eval(state.stringResult);
    }
  }
});

export const counterReducer = calculatorSlice.reducer;
export const {inputStr, reset, result} = calculatorSlice.actions;