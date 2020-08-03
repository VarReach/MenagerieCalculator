import React, { useContext } from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Context from '../../context/Context';
import Tooltip from '../Tooltip/Tooltip';
import ItemsList from '../ItemsList/ItemsList';
import ItemsSelector from '../ItemsSelector/ItemsSelector';
import ActiveRunes from '../ActiveRunes/ActiveRunes';
import RunesList from '../RunesList/RunesList';
import RuneSelectors from '../RuneSelectors/RuneSelectors';
import ActiveItems from '../ActiveItems/ActiveItems';

function App() {
  const { items } = useContext(Context);

  return (
    <div className="app">
      <Nav/>
      <main role="main">
        {
          (items) ? (
            <>
              <RunesList />
              <ActiveItems />
              <ItemsSelector />
            </>
          )
          : (<>
            <ItemsList />
            <ActiveRunes />
            <RuneSelectors />
          </>)
        }

        <Tooltip/>
      </main>
      <footer role="contentinfo" className="footer">
        Credit to <a className="footer-link" href="https://www.reddit.com/user/BunnyBot5000">/u/BunnyBot5000</a> for making the spreadsheet.
      </footer>
    </div>
  );
}

export default App;
