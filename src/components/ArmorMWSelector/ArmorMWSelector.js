import React from 'react';
import './ArmorMWSelector.css';
import { armorMWs } from '../../resources/store';
import MWSelector from '../MWSelector/MWSelector';

function ArmorMWSelector() {

  return (
    <ul className="mw-selector-container">
      {
        armorMWs.map((wep, i) => {
        return <MWSelector key={i} item={wep}/>
      })}
    </ul>
  );
}

export default ArmorMWSelector;
