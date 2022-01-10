import React, { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";
import Book from './Book2';
import { BrowserRouter as Router,Link,Switch,Route,withRouter } from 'react-router-dom';
import NavBar2 from "../layout/NavBar2";
import addBook from './AddBook';
import CardComponent from "./bookCard/CardComponent";



const Home = ({handleLogout}) => {
  
  return (
  <div className="homeContainer">
    <Header handleLogout={handleLogout}/>
    <CardComponent />
  </div>
  )
};

export default Home;
