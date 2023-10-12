import react, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch, useIsFirstRender } from '../../utils/hooks'

import { Actions } from './Actions'
import { Datasource } from './Datasource'
import { loadData } from './datasourceSlice'
import CircularProgress from '@mui/material/CircularProgress';

export { SearchDatasource }


function SearchDatasource() {
  
  const isFirstRender = useIsFirstRender();
  const filteredData = useAppSelector(state => state.datasource.filteredData);
  const status = useAppSelector(state => state.datasource.status);
  //console.log('@filteredData', filteredData);

  const noMatchingMessage = filteredData.length === 0 ? 'No matching datasources' : '';

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isFirstRender) {
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
      <div className="MessageArea"
        style={{
          color: '#27272A',
          fontSize: 18,
          textAlign: 'center',
          margin: 36
        }}>
        { status === 'loading' ? <CircularProgress /> : noMatchingMessage }
      </div>
    </>
  );
}
