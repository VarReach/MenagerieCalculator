import React, { useContext } from 'react';
import './RunesList.css';
import { runes } from '../../resources/store';
import Context from '../../context/Context';

function RunesList() {
  const { setActiveItem, rune0, rune1, rune1Ids, rune2} = useContext(Context);

  function renderRunes(j) {
    return runes.map((rune, i) => {
      //0 = active, 1 = temp, 2 = deactivated
      let active = 0;
 
      if (j === 0) {
        if (rune0) {
          if (rune0.id !== rune.id) {
            (rune0.active)
              ? active = 2
              : active = 1;
          }
        }
      }

      if (j === 1) {
        if (rune1) {
          if (rune1.color !== rune.color) {
            (rune1.active)
              ? active = 2
              : active = 1;
          } else if (rune1Ids && !rune1Ids.ids.includes(rune.id)) {
            (rune1Ids.active)
              ? active = 2
              : active = 1;
          }
        }
      }

      if (j === 2) {
        if (rune2) {
          if (!rune2.colors.includes(rune.color)) {
            (rune2.active)
              ? active = 2
              : active = 1;
          }
        }
      }

      if (active === 0) {
        return (
          <li 
            key={i} className={`runes-list-rune list-${j} ${rune.color}`}
            onMouseEnter={(e) => {
                setActiveItem(e, rune) 
            }}
            onMouseLeave={(e) => setActiveItem(e, null)}
          >
            <img className="runes-list-image" src={require(`../../resources/images/${rune.image}`)} alt={rune.name}/>
          </li>
        );
      } else if (active === 1) {
          return (
            <li 
              key={i} className={`inactive runes-list-rune list-${j} ${rune.color}`}
            >
              <img className="runes-list-image" src={require(`../../resources/images/${rune.image}`)} alt={rune.name}/>
            </li>
        );
      } else {
        return (
          <li 
            key={i} className={`empty runes-list-rune list-${j} ${rune.color}`}
          >
            <img className="runes-list-image" src={require(`../../resources/images/${rune.image}`)} alt={rune.name}/>
          </li>
        );
      }
    });
  }

  return (
    <div className="runes-list">
      <ul className="runes-list-list list-0">
        {renderRunes(0)}
      </ul>
      <ul className="runes-list-list list-1">
        {renderRunes(1)}
      </ul>
      <ul className="runes-list-list list-2">
        {renderRunes(2)}
      </ul>
    </div>
  );
}

export default RunesList;
