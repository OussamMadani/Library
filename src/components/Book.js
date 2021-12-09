import axios from "axios";
import React from "react";
import imgHead from "../images/headHome.jpg"
import NavBar2 from "../layout/NavBar2";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";


const Book = ({handleLogout}) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const result = await axios.get("http://localhost:3500/book");
    setBooks(result.data.reverse());
  };


  const renderBook = () => {
    if(!books) {
        return(
            <tr>
                <td colSpan="4"> Landing books.... </td>
            </tr>
        );
    }
    if(books.length === 0){
        return(
            <tr>
                <td colSpan="4"> There is no book yet </td>
            </tr>
        );
    }
    return books.map((book)=>(
        <tr>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.description}</td>
            <td>{book.date_created}</td>
            <td>{book.rating}</td>
            <td>
                <div className="containerbtn">
                <Link type="button" className="btn btn-warning" to={`/edit/${book.id}`}>Edit</Link>
                <button type="button" className="btn btn-danger" onClick={() => { axios.delete(`http://localhost:3500/book/${book.id}`).then(res =>{
                  loadBooks();
                  alert("the has deleted");
                  }).catch(err =>{
                  alert("error");
                  })}} 
                >DELETE</button>
                </div>
            </td>
        </tr>
    ));
  }
    return (
    <div className="container">
      <div className="headHome">
      <img  src={imgHead} ></img>
      </div>
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Date create</th>
              <th scope="col">Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
         {renderBook()}
          </tbody>
        </table>

      <Link to="/add" className="btn btn-primary" >ADD BOOK</Link>
      </div>
    </div>
  );
};

export default Book;
