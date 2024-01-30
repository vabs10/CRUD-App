import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from './Redux/Actions';
import { CONSTANTS, Util } from './Constants';
import { useNavigate } from 'react-router-dom';

function AddBookForm() {
  const [newBook, setNewBook] = useState(CONSTANTS.emptyBookObj);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSaveDisabled = !newBook.title || !newBook.author || !newBook.genre || !newBook.publicationYear || !newBook.rating;

  const handleEditInputChange = (e) => {
    Util.handleEditInputChange(setNewBook, e.target);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    console.log("newBook -> ", newBook);
    dispatch(addBook(newBook));
    navigate('/');
    setNewBook(CONSTANTS.emptyBookObj);
  };

  return (
    <>
      <form onSubmit={handleAddBook}>
        <div className="form-group">
          <label htmlFor="title">Title of the book</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Book Title"
            value={newBook.title}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="author">Book Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            placeholder="Book Author"
            value={newBook.author}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="genre">Book Genre</label>
          <input
            type="text"
            name="genre"
            className="form-control"
            placeholder="Book Genre"
            value={newBook.genre}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="publicationYear">Book Publication Year</label>
          <input
            type="number"
            name="publicationYear"
            className="form-control"
            placeholder="Book Publication Year"
            value={newBook.publicationYear}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="rating">Book Rating</label>
          <input
            type="number"
            name="rating"
            className="form-control"
            placeholder="Book Rating"
            value={newBook.rating}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form group mt-3">
          <button className="btn btn-primary m-2" disabled={isSaveDisabled}>
            Add New Book
          </button>
          <button className="btn btn-secondary m-2">Clear Fields</button>
        </div>
      </form>
    </>
  );
}

export default AddBookForm;
