import React, { useContext } from 'react';
import './Rune.css';
import Context from '../../context/Context';

export default function Item(props) {
  const { setTempRune, setActiveRune } = useContext(Context);

  return (
    <li className={`rune ${props.rune.color}`}>
      <button className="rune-button"
        onMouseEnter={(e) => setTempRune(e, props.rune)}
        onClick={() => setActiveRune(props.rune)}
      >
        <img 
          className="rune-image" 
          src={require(`../../resources/images/${props.rune.image}`)} alt={props.rune.name}
        />
      </button>
    </li>
  )
}