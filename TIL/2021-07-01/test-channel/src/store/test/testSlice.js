import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: 0,
}

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    getLocation: (state, action) => ({
      type: 'GET_LOCATION', 
    })
  }
});

export const { getLocation } = testSlice.actions;

export default testSlice.reducer;