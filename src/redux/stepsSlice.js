import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "steps",
  initialState: ['hi'],
  reducers: {
    overrideSteps: (state, action) => {
      console.log(`state (before): ${JSON.stringify(state)}`)
      state = action.payload.steps
      console.log(`state (after): ${JSON.stringify(state)}`)
      return state;
      
    },
  },
})

export const { overrideSteps } = stepSlice.actions;

export default stepSlice.reducer;