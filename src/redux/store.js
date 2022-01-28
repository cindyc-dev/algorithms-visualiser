import { configureStore } from "@reduxjs/toolkit";
import stepReducer from './stepsSlice'

export default configureStore({
  reducer: {
    steps: stepReducer,
  }
})