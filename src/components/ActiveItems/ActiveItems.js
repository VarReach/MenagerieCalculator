import React, { useContext } from 'react';
import './ActiveItems.css';
import Context from '../../context/Context';

function ActiveItems(props) {
  const Items = useContext(Context);

  function getOrder(i) {
    let order;
    switch(i) {
      case 1:
        order = 1;
        break;
      case 2:
        order = 3;
        break;
      default:
        order = 2;
        break;
    }
    return order;
  }

  function generateActiveItem(item,i) {
    return (
      <li key={i} className={(i !== 0) ? "active-item masterwork-item" : "active-item"} style={{ 'order': getOrder(i) }}>
        <button className="active-item-button"
          onMouseEnter={(e) => Items.setActiveItem(e, item )}
          onMouseLeave={(e) => Items.setActiveItem(e, null)}
          onClick={() => Items.deactivateItem(i)}
        >
          <img 
            className="item-image active-item-image" 
            src={require(`../../resources/images/${item.image}`)} alt={item.name}
          />
        </button>
      </li>
    );
  }
  function generateTempActiveItem(item,i) {
    return (
      <li key={i} className={(i !== 0) ? "temp-item masterwork-item" : "temp-item"} style={{ 'order': getOrder(i) }}>
        <img 
          className="item-image temp-item-image" 
          src={require(`../../resources/images/${item.image}`)} alt={item.name}
        />
      </li>
    );
  }
  function generateInactiveItem(i) {
    return (
      <li key={i} className={(i !== 0) ? "inactive-item masterwork-item" : "inactive-item"} style={{ 'order': getOrder(i) }}></li>
    );
  }
  function renderActiveItems() {
    let activeItems = [];
    for (let i = 0; i < 3; i++) {

      //determine whether to show tempitem or active item.
      //behavior is if temp === item, show item. Else show temp.
      let id = Items[Items.dictionary[i]];
      id && (id = {...id});
    
      if (id && id.active) {
        activeItems[i] = generateActiveItem(id, i);
      } else if (id) {
          activeItems[i] = generateTempActiveItem(id, i);
      } else {
          activeItems[i] = generateInactiveItem(i);
      }
    }
    return activeItems;
  }

  return (
    <div className="items-container">
      <ul className="items-active">
        {renderActiveItems()}
      </ul>
    </div>
  );
}

export default ActiveItems;
