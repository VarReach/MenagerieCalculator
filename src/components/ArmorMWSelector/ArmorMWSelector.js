import React, { useContext } from 'react';
import './ArmorMWSelector.css';
import { armorMWs } from '../../resources/store';
import Context from '../../context/Context';
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
