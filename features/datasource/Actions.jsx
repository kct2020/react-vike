import react from 'react'
import magnifyingGlass from './magnifying_glass.svg'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { updateSearchTerm, updateFilter } from './datasourceSlice'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl'

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
        <div className="InputFieldBase" style={{width: 320, flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
          <div className="Input" style={{alignSelf: 'stretch', flex: '1 1 0', paddingLeft: 12, paddingRight: 12, paddingTop: 8, paddingBottom: 8, background: 'white', borderRadius: 6, overflow: 'hidden', border: '1px #E4E4E7 solid', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
            <div className="Text" style={{flex: '1 1 0', height: 24, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex'}}>
              <div className="Icons" style={{width: 16, height: 16, position: 'relative'}}>
                <img src={magnifyingGlass} alt="Magnifying Glass" />
              </div>
              <input type="text" style={{width: '100%', height: '100%', background: 'transparent', border: 'none', outline: 'none', color: '#71717A', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word'}} placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
            </div>
          </div>
        </div>
      </div>
      <div className="RightActions" style={{height: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <FormControl fullWidth>
          <InputLabel id="filter-select-label"
            sx={{ backgroundColor: 'white', fontFamily: 'Inter', fontSize: 16, top: '-7px', "&.Mui-focused, &.MuiInputLabel-shrink": {top: '0px'} }}
          >Filter by</InputLabel>
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
