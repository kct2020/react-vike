import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  rawData: [],
  dataSourceData: [],
  filteredData: [],
  status: 'loading',
  searchTerm: '',
  filterOptions: [
    { value: 'all', label: 'All' },
    { value: 'ml', label: 'Machine Learning' },
    { value: 'data', label: 'Data' }
  ],
  selectedFilter: '',
};

export const loadData = createAsyncThunk(
  'datasource/loadData',
  async (arg, { getState, rejectWithValue }) => {
    const options = {
      method: 'GET'
    };
    try {
      const response = await fetch('./mindsdb_connectors.json', options);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return rejectWithValue('Error: Failed to load datasource data');
    }
  }
);

const filterDatasources = (data, searchTerm, typeFilter) => {
  return data.filter((item) => {
    if ((typeFilter !== '' && typeFilter !== 'all') && item.type !== typeFilter) {
      return false;
    }
    const words = item.title.toLowerCase().split(' ');
    let lowerSearchTerm = searchTerm.toLowerCase();
    let match = false;
    for (let i in words) {
      if (words[i].startsWith(lowerSearchTerm)) {
        match = true;
        break;
      }
    }
    return match;
  });
};

// Remove items from data that do not have a title, since they will break filtering
const cleanData = (data) => {
  return data.filter((item) => {
    if (typeof item.title === 'undefined'
        || item.title === '') {
      return false;
    } 
    return true;
  });
};

export const datasourceSlice = createSlice({
  name: 'datasource',
  initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredData = filterDatasources(state.dataSourceData, action.payload, state.selectedFilter);
    },
    updateFilter: (state, action) => {
      state.selectedFilter = action.payload;
      console.log('action.payload', action.payload);
      state.filteredData = filterDatasources(state.dataSourceData, state.searchTerm, action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.rawData = action.payload;
        const cleanedData = cleanData(action.payload);
        state.dataSourceData = cleanedData;
        state.filteredData = cleanedData;
      })
      .addCase(loadData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
    }
  });

export const getFilteredData = (state) => state.datasource.filteredData;
export const { updateSearchTerm, updateFilter } = datasourceSlice.actions;
export default datasourceSlice.reducer;
