import React from 'react'
import { useAppSelector, useAppDispatch } from '../renderer/hooks'
import { Tip } from '../components/tip/Tip'
import { SearchDatasource } from '../features/datasource/SearchDatasource'
import { increment, decrement, selectCount } from './counterSlice'

export { Page }

function Page() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())

  return (
    <>
      <Title />
      <Tip />
      <SearchDatasource />
      <h1>Redux-Controlled Counter</h1>
      Count: {count}. <button onClick={handleIncrement}>++</button> <button onClick={handleDecrement}>--</button>
    </>
  )
}

function Title() {
  return (
    <div className="Title"
      style={{width: '100%', height: 64, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex', margin:'32px auto'}}>
      <div className="SelectYourDatasource"
        style={{color: 'black', fontSize: 20, fontWeight: '600', lineHeight: '28px', wordWrap: 'break-word'}}>Select your datasource</div>
      <div className="DonTSeeWhatYouReLookingForMakeARequest"><span style={{color: '#52525B', fontSize: 16, lineHeight: '28px', wordWrap: 'break-word'}}>Don’t see what you’re looking for? </span><span style={{color: '#52525B', fontSize: 16, textDecoration: 'underline', lineHeight: '28px', wordWrap: 'break-word'}}>Make a request</span></div>
    </div>
  );
}

