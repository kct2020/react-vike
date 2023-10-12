import { configureStore } from '@reduxjs/toolkit'
// import datasourceReducer from './features/searchDatasource/datasourceSlice'
import counterReducer from '../pages/counterSlice'

export const getStore = (PRELOADED_STATE) => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      /* searchDatasource: searchDatasourceReducer */
    },
    preloadedState: PRELOADED_STATE,
    middleware: []
  })
}


