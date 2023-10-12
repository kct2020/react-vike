import react, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../renderer/hooks'

import { Actions } from './Actions'
import { Datasource } from './Datasource'
import { loadData } from './datasourceSlice'

export { SearchDatasource }


function SearchDatasource() {
  
  const [isFirstRender, setIsFirstRender] = useState(true);
  const filteredData = useAppSelector(state => state.datasource.filteredData)
  console.log('@filteredData', filteredData);

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isFirstRender) {
      console.log('SearchDatasource mounted');
      setIsFirstRender(false);
      console.log('@@@@ loadData', loadData());
      dispatch(loadData())
      return;
    }
  }, []);

  const datasources = filteredData.map((datasource, index) => {
    if (!datasource.title || !datasource.icon || !datasource.icon.data || !datasource.icon.type) {
      console.log('omitting', datasource);
      return null;
    }
    return <Datasource key={index} title={datasource.title} icon={datasource.icon}/>
  });

  return (
    <>
      <div />
      <Actions />
      <div className="Frame427318935"
        style={{width: '100%', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
        {datasources}
      </div>
    </>
  );
}
