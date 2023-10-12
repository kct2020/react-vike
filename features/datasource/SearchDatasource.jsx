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
      dispatch(loadData())
      return;
    }
  }, []);

  const datasources = filteredData.map((datasource, index) => {
    return <Datasource key={index} title={datasource.title} icon={datasource.icon}/>
  });

  return (
    <>
      <Actions />
      <div className="Frame427318935"
        style={{width: '100%', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
        {datasources}
      </div>
    </>
  );
}
