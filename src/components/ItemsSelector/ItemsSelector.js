import React, { useContext } from 'react';
import './ItemsSelector.css';
import { armor, weapons } from '../../resources/store';
import Context from '../../context/Context';
import ItemSelector from '../ItemSelector/ItemSelector';
import ArmorMWSelector from '../ArmorMWSelector/ArmorMWSelector';
import WeaponMWSelector from '../WeaponMWSelector/WeaponMWSelector';
import ArmorTypeSelector from '../ArmorTypeSelector/ArmorTypeSelector';

function ItemsList() {
  const { activeClass } = useContext(Context);
  function renderArmor() {
    return armor[activeClass].map((set, j) => {
      return (
        <div key={j} className="items-selector-section">
          {
            set.map((armor, i) => {
            return <ItemSelector key={i} item={armor}/>
          })}
        </div>
      )
    });
  }
  function renderWeapons() {
    return weapons.map((set, j) => {
      return (
        <div key={j} className="items-selector-section">
          {
            set.map((wep, i) => {
            return <ItemSelector key={i} item={wep} isWeapon={true}/>
          })}
        </div>
      )
    });
  }

  return (
    <div className="items-selection-container">
      <ArmorMWSelector/>
      <ArmorTypeSelector/>
      <ul className="items-selector">
        {renderArmor()}
        {renderWeapons()}
      </ul>
      <WeaponMWSelector/>
    </div>
  );
}

export default ItemsList;
