import './App.css';
import bookStore from './Components/Redux/Store';
import { Provider, useSelector } from 'react-redux';
import React from 'react';
import NavLinks from './Components/_04_Nav';


function App() {
  return (
    <Provider store={bookStore}>
      <NavLinks />
    </Provider>
  );
}

export default App;
