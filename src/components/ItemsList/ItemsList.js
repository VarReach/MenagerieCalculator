import React, { useContext } from 'react';
import './ItemsList.css';
import { armor, weapons } from '../../resources/store';
import Context from '../../context/Context';
import Item from '../Item/Item';

function ItemsList() {
  const { activeClass } = useContext(Context);
  function renderArmor() {
    return armor[activeClass].map((set, j) => {
      return (
        <div key={j} className="item-section">
          {
            set.map((armor, i) => {
            return <Item key={i} item={armor}/>
          })}
        </div>
      )
    });
  }
  function renderWeapons() {
    return weapons.map((set, j) => {
      return (
        <div key={j} className="item-section">
          {
            set.map((wep, i) => {
            return <Item key={i} item={wep} isWeapon={true}/>
          })}
        </div>
      )
    });
  }

  return (
    <ul className="items">
      {renderArmor()}
      {renderWeapons()}
    </ul>
  );
}

export default ItemsList;
