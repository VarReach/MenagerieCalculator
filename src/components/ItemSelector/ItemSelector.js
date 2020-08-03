import React, { useContext } from 'react';
import './ItemSelector.css';
import Context from '../../context/Context';

export default function ItemSelector(props) {
  const { setItem, setTempItem, item } = useContext(Context);

  if (item && item.active) {
    return (
      <li 
        className='item-selector faded-item-selector'
      >
        <button 
          className="item-selector-button"
          disabled
        >
          <div className="item-selector-image-container">
            <img className="item-selector-image" src={require(`../../resources/images/${props.item.image}`)} alt={props.item.name}/>
          </div>
        </button>
      </li>
    )
  }

  return (
    <li 
      className='item-selector'
    >
      <button 
        className="item-selector-button"
        onMouseEnter={(e) => setTempItem(e, props.item, 0)}
        onMouseLeave={(e) => setTempItem(e, null, 0)}
        onClick={() => setItem(props.item)}
      >
        <div className="item-selector-image-container">
          <img className="item-selector-image" src={require(`../../resources/images/${props.item.image}`)} alt={props.item.name}/>
        </div>
      </button>
    </li>
  )
}