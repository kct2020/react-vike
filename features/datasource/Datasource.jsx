import react from 'react'

import { Actions } from './Actions'

export { Datasource }


function Datasource(props) {
  const { title } = props;
  return (
    <button className="Datasource"
      style={{width: 188.80,
      height: 176,
      paddingTop: 36,
      paddingBottom: 36,
      background: 'white',
      boxShadow: '0px 0.3512499928474426px 0.7024999856948853px rgba(16, 24, 40, 0.05)',
      borderRadius: 8,
      border: '1px #E4E4E7 solid',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 20,
      display: 'inline-flex'}}>
      <div className="Component1"
        style={{width: 64, height: 64, position: 'relative'}}>
        <div className="Vector"
        style={{width: 30.40, height: 64, left: 17.60, top: 0, position: 'absolute', background: '#00684A'}}></div>
      </div>
      <div className="Mongodb"
      style={{color: '#27272A', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px', wordWrap: 'break-word'}}>{title}</div>
    </button>
  );
}
