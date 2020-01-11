import React from 'react';
import NavBar from "./components/NavBar";
import ItemCardList from "./components/itemCardList";
import {StoreProvider} from "./storeContext";


function App() {
  return (
      <StoreProvider>
          <div className="App">
              <NavBar/>
              <ItemCardList/>
          </div>
      </StoreProvider>
  );
}

export default App;
