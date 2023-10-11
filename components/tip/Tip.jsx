import React from 'react'
import lightbulb from './lightbulb.svg'

export { Tip }

function Tip() {
  return (
    <div className="Alert"
      style={{width: 1024, height: 76, padding: 16, background: '#FAFAFA', borderRadius: 8, border: '1px #E4E4E7 solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex'}}>
      <div className="Icons" style={{width: 16, height: 16, position: 'relative'}}>
        <img src={lightbulb} alt="Lightbulb" style={{width: 16, height: 16}} />
      </div>
      <div className="Frame1"
        style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
        <div className="Heading5HeadsUp"
        style={{alignSelf: 'stretch', height: 16, color: '#09090B', fontSize: 16, fontWeight: '500', lineHeight: '16px', wordWrap: 'break-word'}}>Pro tip!</div>
        <div className="YouCanAddComponentsAndDependenciesToYourAppUsingTheCli" style={{alignSelf: 'stretch'}}><span style={{color: '#09090B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Write</span><span style={{color: '#09090B', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}> datasource name in the editor to print the form template.</span></div>
      </div>
    </div>
  );
}
