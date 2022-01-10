import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios";
import Rating from './Rating';
import './CardComponent.css';


const CardComponent = () => {
    const [books, setBooks] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [img, setImg] = useState('');
    const [rating, setRating] = useState(null);
    const [id, setId] = useState(null);
    
    useEffect(() => {
        loadBooks();
      }, []);
    
      const loadBooks = async () => {
        const result = await axios.get("http://localhost:3500/book");
        setBooks(result.data.reverse());
      };

      // const deleteBook = (id) =>{
      //   axios
      // }

      console.log(books);
      const renderBook = () => {
        if(!books) {
            return(
                <h6> Landing books....</h6>
            );
        }
        if(books.length === 0){
            return(
                <h6>There is no book yet</h6>
            );
        }
        return books.map((book)=>(
          <div className="col"> 
          <div className="card">
          <div className="card-header">
            <img src={book.img} alt="rover" />
          </div>
          <div className="card-body">
            <h4>
              {book.title}
            </h4>
            <p>
              {book.description}
            </p>
            {book.date}
            <Rating rating={book.rating}/>
            <div className='tag'>
            <div className='row'>
              <div className='col'>
            <span class="tag tag-delete">Delete</span>
            </div>
            <div className='col'>
            <span class="tag tag-edit">Edit  </span>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
        ));
      }
      
    return(
    <div className="container">
      <div className='row'>
      {renderBook()}
    </div>
    </div>
    )
}
export default CardComponent;