import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface CalculatorSlice {
  stringResult: string
}

const initialState: CalculatorSlice = {
  stringResult: ''
};

export const calculatorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    reset: (state, action: PayloadAction<string>) => {
      state.stringResult = action.payload;
    },
    inputStr: (state, action: PayloadAction<string>) => {
      state.stringResult += action.payload;
    },
    result: (state) => {
      try {
        state.stringResult = eval(state.stringResult);
      } catch {
        state.stringResult = '';
      }
    }
  }
});

export const counterReducer = calculatorSlice.reducer;
export const {inputStr, reset, result} = calculatorSlice.actions;