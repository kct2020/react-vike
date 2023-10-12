import react, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

import { Actions } from './Actions'
import { Datasource } from './Datasource'

import { useAppSelector, useAppDispatch } from '../../renderer/hooks'

import { increment, decrement } from '../../pages/counterSlice'

export { SearchDatasource }


function SearchDatasource() {
  
  const [isFirstRender, setIsFirstRender] = useState(true);
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isFirstRender) {
      console.log('SearchDatasource mounted');
      setIsFirstRender(false);
      dispatch({type: 'searchDatasource/mounted'})
      return;
    }
  }, []);

  return (
    <>
      <div />
      <Actions />
      <div className="Frame427318935"
        style={{width: '100%', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 20, display: 'inline-flex'}}>
        <Datasource title="MongoDB"/>
        <Datasource title="Solr" />
        <Datasource />
        <Datasource />
        <Datasource />
        <Datasource />
        <Datasource />
        <Datasource />
      </div>
    </>
  );
}
