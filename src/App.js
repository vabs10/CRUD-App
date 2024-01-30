import logo from './logo.svg';
import './App.css';
import Table from './Components/_01_Authors';
import store from './Components/Redux/Store';
import { Provider, useSelector } from 'react-redux';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBookForm from './Components/AddBook';
import EditBookForm from './Components/EditBook';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/add-book" element={<AddBookForm/>} />
          <Route path='/edit-book/:id' element={<EditBookForm/>} />
          <Route path="/" element={<Table/>} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
