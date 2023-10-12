import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  dataSourceData: [],
  filteredData: [],
  status: 'idle'
};

export const loadData = createAsyncThunk(
  'datasource/loadData',
  async (arg, { getState, rejectWithValue }) => {
    const options = {
      method: 'GET'
    };
    try {
      console.log('loadData', import.meta.env.BASE_URL );
      const response = await fetch('./mindsdb_connectors.json', options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return rejectWithValue('Error: Failed to load datasource data');
    }
  }
);


export const datasourceSlice = createSlice({
  name: 'datasource',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.dataSourceData = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(loadData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
    }
  });

export const getFilteredData = (state) => state.datasource.filteredData;
export default datasourceSlice.reducer;
