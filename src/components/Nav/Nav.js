import React, { useContext } from 'react';
import './Nav.css';
import { classes } from '../../resources/store';
import Context from '../../context/Context';

function App() {
  const { activeClass, setActiveClass, items, toggleItems } = useContext(Context);
  function renderNavButtons() {
    return classes.map((className, i) => {
      if (activeClass == i) {
        return (
          <li key={i} className="nav-button-container">
            <button className="nav-button active-nav-button">{className}</button>
          </li>
        )
      } else {
        return (
          <li key={i} className="nav-button-container">
            <button className="nav-button" onClick={() => setActiveClass(i)}>{className}</button>
          </li>
        )
      }
    });
  }

  return (
    <header className="header" role="banner">
      <div className="header-left">
        <h1 className="header-title">Menagerie-<span className="header-title-bold">Calculator</span></h1>
        <ul>
          <li className="nav-button-container">
            {items ? <button className="nav-button" onClick={() => toggleItems()}>Runes</button> : <button className="nav-button active-nav-button">Runes</button>}
          </li>
          <li className="nav-button-container">
            {!items ? <button className="nav-button" onClick={() => toggleItems()}>Items</button> : <button className="nav-button active-nav-button">Items</button>}
          </li>
        </ul>
      </div>
      <nav role="navigation">
        <ul>
          {renderNavButtons()}
        </ul>
      </nav>
    </header>
  );
}

export default App;
