import React, { useContext } from 'react';
import './ActiveRunes.css';
import Context from '../../context/Context';

function ActiveRunes(props) {
  const Runes = useContext(Context);

  function generateActiveRune(rune,i) {
    return (
      <li key={i} className={"active-rune " + rune.color}>
        <button className="rune-button"
          onMouseEnter={(e) => Runes.setActiveItem(e, rune )}
          onMouseLeave={(e) => Runes.setActiveItem(e, null)}
          onClick={() => Runes.deactivateRune(i)}
        >
          <img 
            className="rune-image active-rune-image" 
            src={require(`../../resources/images/${rune.image}`)} alt={rune.name}
          />
        </button>
      </li>
    );
  }
  function generateTempActiveRune(rune,i) {
    return (
      <li key={i} className="temp-rune">
        <img 
          className="rune-image temp-rune-image" 
          src={require(`../../resources/images/${rune.image}`)} alt={rune.name}
        />
      </li>
    );
  }
  function generateInactiveRune(i) {
    return (
      <li key={i} className="inactive-rune"></li>
    );
  }
  function renderActiveRunes() {
    let runes = [];
    for (let i = 0; i < 3; i++) {
      let rune = Runes[`${'rune'+i}`];
      rune && (rune = {...rune});
      if (rune) {
        if (rune.active) { //actually active
          runes[i] = generateActiveRune(rune, i);
        } else { //temp (mouseover)
          runes[i] = generateTempActiveRune(rune, i);
        }
      } else {
        runes[i] = generateInactiveRune(i);
      }
    }
    return runes;
  }

  return (
    <div className="runes-container">
      <ul className="runes-active">
        {renderActiveRunes()}
      </ul>
    </div>
  );
}

export default ActiveRunes;
