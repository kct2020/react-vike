import react from 'react'
import magnifyingGlass from './magnifying_glass.svg'
import { useAppSelector, useAppDispatch } from '../../utils/hooks'
import { updateSearchTerm } from './datasourceSlice'

export { Actions }

function Actions() {
  const searchTerm = useAppSelector(state => state.datasource.searchTerm);
  const dispatch = useAppDispatch();
  const handleSearchChange = event => {
    dispatch(updateSearchTerm(event.target.value));
  };

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
      <div className="LeftActions" style={{height: 40, justifyContent: 'flex-end', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
        <div className="Sort" style={{justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'flex'}}>
          <div className="InputDropdownBase" style={{width: 113, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
            <div className="LabelFalseTypeDefaultStatePlaceholder" style={{alignSelf: 'stretch', height: 40, paddingLeft: 12, paddingRight: 12, paddingTop: 10, paddingBottom: 10, background: 'white', borderRadius: 6, border: '1px #E4E4E7 solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}>
              <div className="SpanH2dF6576b26" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Theme" style={{textAlign: 'center', color: '#09090B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: 20, wordWrap: 'break-word'}}>Filter by</div>
              </div>
              <div className="Svg" style={{width: 16, height: 16, paddingLeft: 4, paddingRight: 4, paddingTop: 6, paddingBottom: 6, opacity: 0.50, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                <div className="Vector" style={{width: 8, height: 4, border: '1.33px #09090B solid'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
