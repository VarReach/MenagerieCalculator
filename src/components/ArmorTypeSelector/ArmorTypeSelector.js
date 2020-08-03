import React from 'react';
import { armorTypes } from '../../resources/store';
import MWSelector from '../MWSelector/MWSelector';

function ArmorMWSelector() {

  return (
    <ul className="mw-selector-container">
      {
        armorTypes.map((wep, i) => {
        return <MWSelector key={i} item={wep}/>
      })}
    </ul>
  );
}

export default ArmorMWSelector;
