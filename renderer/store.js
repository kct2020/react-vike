import { configureStore } from '@reduxjs/toolkit'
import datasourceReducer from '../features/datasource/datasourceSlice'

export const store = configureStore({
  reducer: {
    datasource: datasourceReducer
  },
  middleware: []
});

export const getStore = (PRELOADED_STATE) => {
  return configureStore({
    reducer: {
      datasource: datasourceReducer
    },
    preloadedState: PRELOADED_STATE
  })
}


