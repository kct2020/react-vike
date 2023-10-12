import react from 'react'
import magnifyingGlass from './magnifying_glass.svg'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { updateSearchTerm, updateFilter } from './datasourceSlice'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';

export { Actions }

function Actions() {
  const searchTerm = useAppSelector(state => state.datasource.searchTerm);
  const filterOptions = useAppSelector(state => state.datasource.filterOptions);
  const selectedFilter = useAppSelector(state => state.datasource.selectedFilter);
  const dispatch = useAppDispatch();
  const handleSearchChange = event => {
    dispatch(updateSearchTerm(event.target.value));
  };
  const handleFilterChange = event => {
    dispatch(updateFilter(event.target.value));
  };
  const filterMenuItems = filterOptions.map((filterOption, index) => {
    return <MenuItem key={index} value={filterOption.value}>{filterOption.label}</MenuItem>
  })

  return (
    <div className="FiltersActions" style={{width: 1024, margin: '16px 0px', height: 40, justifyContent: 'space-between', alignItems: 'flex-start', display: 'inline-flex'}}>
      <div className="InputField" style={{height: 40, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
        <TextField variant="outlined" label="Search" size="small" value={searchTerm}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={magnifyingGlass} alt="Magnifying Glass" />
              </InputAdornment>
            ),
          }}
          sx={{ width: 183, height: '40px', borderRadius: '6px', fontFamily: 'Inter' }} onChange={handleSearchChange}>
        </TextField>
        

      </div>
      <div className="RightActions" style={{height: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <FormControl fullWidth>
          <InputLabel id="filter-select-label"
            sx={{ backgroundColor: 'white', fontFamily: 'Inter', fontSize: 16, top: '-7px', "&.Mui-focused, &.MuiInputLabel-shrink": {top: '0px'} }}
          >Filter By</InputLabel>
          <Select
            labelId="filter-select-label"
            onChange={handleFilterChange}
            value={selectedFilter}
            sx={{ width: 183, height: 40, borderRadius: '6px', fontFamily: 'Inter' }}
          >
            {filterMenuItems}
          </Select>
        </FormControl>
      </div>
    </div>

  );
}
