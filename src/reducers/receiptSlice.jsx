import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  receiptNumber: uuidv4().substr(0, 10)
};
const receiptSlice = createSlice({
  name: 'receipt',
  initialState,
  reducers: {
    updateReceiptNumber: (state) => {
      state.receiptNumber = uuidv4().substr(0, 10);
    }
  }
});
export const { updateReceiptNumber } = receiptSlice.actions;
export default receiptSlice.reducer;
