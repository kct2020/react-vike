import react from 'react'


import { Actions } from './Actions'
import placeholder from './placeholder.svg'

export { Datasource }


function Datasource(props) {
  const { title, icon } = props;

  let iconUrl = placeholder;
  if (icon && icon.data && icon.type && icon.data) {
    let base64Data = icon.data;
    let iconType = icon.type
    if (icon.data.indexOf('<svg') === 0 || icon.data.indexOf('<?xml') === 0) {
      base64Data = btoa(icon.data);
      iconType = 'image/svg+xml';
    }
    iconUrl = `data:${iconType};base64,${base64Data}`;
  }


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
        <div 
          style={{
            backgroundImage: `url(${iconUrl})`,
            backgroundSize: 'contain',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}/>
      </div>
      <div className="Title"
      style={{color: '#27272A', fontSize: 14, fontFamily: 'Inter', fontWeight: '500', lineHeight: '14px', wordWrap: 'break-word'}}>{title}</div>
    </button>
  );
}
