import React from 'react';
import { weaponMWs } from '../../resources/store';
import MWSelector from '../MWSelector/MWSelector';

function ArmorMWSelector() {

  return (
    <ul className="mw-selector-container" style={{ marginRight: '79px' }}>
      {
        weaponMWs.map((wep, i) => {
        return <MWSelector key={i} item={wep}/>
      })}
    </ul>
  );
}

export default ArmorMWSelector;
