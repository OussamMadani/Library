import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from './Book';
import { BrowserRouter as Router,
  Link,
Switch,
Route,
withRouter } from 'react-router-dom';
import NavBar2 from "../layout/NavBar2";
import addBook from './AddBook';



const Home = ({handleLogout}) => {
  
  return (
  
    <Router>
    <div>
      <NavBar2 handleLogout={handleLogout}/>
      <Switch>
      <Route exact path="/" component={Book} />
      <Route exact path="/add" component={addBook}/> 
      </Switch>
    </div>
    </Router>
    )
};

export default Home;
