import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'update',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => state + action.payload,
    decrement: (state, action: PayloadAction<number>) => state - action.payload,
    setCustomValue: (state, action: PayloadAction<string>) => action.payload,
  },
});

export const {increment, decrement, setCustomValue} = counterSlice.actions;
export default counterSlice.reducer;
