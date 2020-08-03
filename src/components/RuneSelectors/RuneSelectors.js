import React, { useContext } from 'react';
import './RuneSelectors.css';
import { runes } from '../../resources/store';
import RuneSelector from '../Rune/RuneSelector';
import Context from '../../context/Context';

function RuneSelectors() {
  const { setTempRune } = useContext(Context);

  function renderRunes() {
    return runes.map((rune, i) => {
      return <RuneSelector key={i} rune={rune}/>
    });
  }

  return (
    <div className="rune-select-container">
      <ul className="runes" onMouseLeave={(e) => setTempRune(e, null)}>
        {renderRunes()}
      </ul>
    </div>
  );
}

export default RuneSelectors;
