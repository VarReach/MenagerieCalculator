import React, { useContext } from 'react';
import './MWSelector.css';
import Context from '../../context/Context';

export default function MWSelector(props) {
  const { setMasterwork, setTempItem, item, armortype, masterwork, rune0, rune1, rune2 } = useContext(Context);

  let status = false;
  //true means faded, false means active
  if (item && item.active) {
    //armortypes
    if (props.item.type === 5) {
      if (item.type !== 2 || (armortype && armortype.active)) {
        status = true;
      }
    }

    //armor masterworks
    if (props.item.type === 4) {
      if (masterwork && masterwork.active) {
        status = true;
      } else if (item.type !== 2 && item.type !== 3) {
        status = true;
      } else if (item.type === 2) {
        if (!armortype || (armortype && !armortype.active)) {
          status = true;
        }
      }
    }

    //weapon masterworks
    if (props.item.type === 6) {
      if (item.type !== 1 || (masterwork && masterwork.active)) {
        status = true;
      }
    }
  } else {
    status = true;
  }

  const type = props.item.type === 5 ? 1 : 2;

  return (
    <li 
      className={status ? 'mw-selector faded-mw' : 'mw-selector'}
    >
      {status 
        ? (
            <button 
              className="mw-selector-button"
              disabled
            >
              <img className="mw-selector-image" src={require(`../../resources/images/${props.item.image}`)} alt={props.item.name}/>
            </button>
          )
        : (
            <button 
              className="mw-selector-button"
              onMouseEnter={(e) => setTempItem(e, props.item, type)}
              onMouseLeave={(e) => setTempItem(e, null, type)}
              onClick={() => setMasterwork(props.item)}
            >
              <img className="mw-selector-image" src={require(`../../resources/images/${props.item.image}`)} alt={props.item.name}/>
            </button>
          )
      }
    </li>
  )
}