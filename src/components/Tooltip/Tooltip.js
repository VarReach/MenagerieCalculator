import React, { useContext } from 'react';
import './Tooltip.css';
// import { armor, weapons } from '../../resources/store';
import Context from '../../context/Context';

function Tooltip() {
  const { activeItem, activeItemLeft, activeItemTop, activeItemBottom, rune2 } = useContext(Context); 

  //sets the position so that the tooltip is never off the page. See Provider.js for more details.
  const positionStyle = {
    left: activeItemLeft
  };
  (activeItemTop) && (positionStyle.top = activeItemTop);
  (activeItemBottom) && (positionStyle.bottom = activeItemBottom);

  function renderMasterworkText() {
    if (activeItem.type === 1 || activeItem.type === 2 || activeItem.type === 3) { 
      if (rune2) {
        let masterwork;
        if (activeItem.type === 1) {//weapon
          if (rune2.color === "purple") {
            masterwork = 'Handling';
          } else if (rune2.color === "red") {
            masterwork = 'Reload';
          } else if (rune2.color === "green") {
            masterwork = 'Range';
          } else if (rune2.color === "blue") {
            masterwork = 'Stability';
          }
        } else if (activeItem.type === 2) { //armor
          if (rune2.color === "purple") {
            masterwork = 'Arc';
          } else if (rune2.color === "red" || rune2.color === "blue") {
            masterwork = 'Solar';
          } else if (rune2.color === "green") {
            masterwork = 'Void';
          }
        }
        return <span className="tooltip-masterwork">{masterwork}</span>
      }
      return <span className="tooltip-masterwork">???</span>
    }
  }

  if (activeItem) {
    return (
      <div id="tooltip" className="tooltip" style={positionStyle}>
        <div className="tooltip-top" style={{ 'backgroundColor': `#${activeItem.topColor || '522f65'}`}}>
          <h2 className="tooltip-title">{activeItem.name}</h2>
          {renderMasterworkText()}
        </div>
        <div className="tooltip-bottom">
          <p className="tooltip-description">{activeItem.description}</p>
          {activeItem.description2 && <p className="tooltip-description">{activeItem.description2}</p>}
        </div>
      </div>
    );
  } else { return null }
}

Tooltip.defaultProps = {
  showMasterwork: true
};

export default Tooltip;
