import axios from "axios";
import React from "react";
import imgHead from "../images/headHome.jpg"
import NavBar2 from "../layout/NavBar2";
import Header from "./Header";
import { useState, useEffect} from "react";
import { Button,Modal } from "react-bootstrap";

import { Link } from "react-router-dom";


const Book2 = ({handleLogout}) => {
  const [books, setBooks] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState(null);
  const [id, setId] = useState(null);
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
            <td>{book.date}</td>
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
  const onAddSubmit = async () => {
    setLoading(true);
    try{
        await axios.post("http://localhost:3500/book",{
            id: Date.now().toString(),title,description,date,rating
        })
        // history.push('/')
    }catch {
        alert('fail to add book');
    }finally {
        setLoading(false);
    }
}
    return (
    <div className="container">
      
      <Header handleLogout={handleLogout}/>
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

      <Link to="/add" className="btn btn-primary"  >ADD BOOK</Link>
      </div>
      <Button className="nextButton" onClick={handleShow}>
        Open Modal
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                <div className="form-group">
                    
                    <label>Title</label>
                    <input className="form-control"  type="text" value={title} onChange={e => setTitle(e.target.value)}  placeholder="Title" />
                    <label>Description</label>
                    <textarea className="form-control"  type="text" value={description} onChange={e => setDescription(e.target.value)}  placeholder="Description" />
                    <label>Date Created</label>
                    <input className="form-control"  type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Date Created" />
                    <label>Rating</label>
                    <input className="form-control"  type="number" value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating" />
                    <select required name="rating" id="rating" className="p-2 my-1 text-yellow-500 rounded border border-gray-300 shadow-sm focus:border-1 focus:border-gray-500 outline-none">
                    <option value="5" className="text-yellow-500">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</option>
                    <option value="4" className="text-yellow-500">&#x2605;&#x2605;&#x2605;&#x2605;</option>
                    <option value="3" className="text-yellow-500">&#x2605;&#x2605;&#x2605;</option>
                    <option value="2" className="text-yellow-500">&#x2605;&#x2605;</option>
                    <option value="1" className="text-yellow-500">&#x2605;</option>
                </select>
                </div>
                <button className="btn btn-success" type="button" onClick={onAddSubmit} disabled={loading}>{loading? '...loading': 'ADD'}</button>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onAddSubmit} disabled={loading}>
            {loading?'...WAIT':'ADD'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Book2;
