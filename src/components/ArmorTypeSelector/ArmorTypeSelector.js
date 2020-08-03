import React, { useContext } from 'react';
import { armorTypes } from '../../resources/store';
import Context from '../../context/Context';
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
