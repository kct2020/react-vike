import { configureStore } from '@reduxjs/toolkit'
import datasourceReducer from '../features/datasource/datasourceSlice'
import counterReducer from '../pages/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    datasource: datasourceReducer
  },
  middleware: []
});

export const getStore = (PRELOADED_STATE) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      datasource: datasourceReducer
    },
    preloadedState: PRELOADED_STATE
  })
}


