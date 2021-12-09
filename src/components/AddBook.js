import axios from 'axios';
import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';


const AddBook = () =>{
 const history = useHistory();
 const [loading, setLoading] = useState(false);
 const [title, setTitle] = useState('');
 const [description, setDescription] = useState('');
 const [date, setDate] = useState('');
 const [rating, setRating] = useState(null);

 const onAddSubmit = async () => {
     setLoading(true);
     try{
         await axios.post("http://localhost:3500/book",{
             title,description,date,rating
         })
         history.push('/')
     }catch {
         alert('fail to add book');
     }finally {
         setLoading(false);
     }
 }

    return(
        <div>
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
        </div>
    )
}

export default AddBook;