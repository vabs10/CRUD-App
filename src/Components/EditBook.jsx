import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editBook } from './Redux/Actions'; // Make sure to import the correct action for editing
import { CONSTANTS, Util } from './Constants';

function EditBookForm({books}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("Books ID:-",id);
  
  // Use useSelector to access books from Redux state
  // const books = useSelector((state) => state);

  const [editedBook, setEditedBook] = useState(CONSTANTS.emptyBookObj);
  const isSaveDisabled = !editedBook.title || !editedBook.author || !editedBook.genre || !editedBook.publicationYear || !editedBook.rating;

  useEffect(() => {
    if (books) {
      const bookToEdit = books.find((book) => String(book.id) === id);
      setEditedBook(bookToEdit || {});
    }
  }, [id, books]);

  const handleEditInputChange = (e) => {
    Util.handleEditInputChange(setEditedBook, e.target);
  };

  const handleUpdateBook = (e) => {
    e.preventDefault();
    console.log("editedBook -> ", editedBook);
    dispatch(editBook(id, editedBook));
    navigate('/books');
    setEditedBook(CONSTANTS.emptyBookObj);
  };

  
  return (
    <>
      
      <form onSubmit={handleUpdateBook}>
        <div className="form-group">
          <label htmlFor="title">Title of the book</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Book Title"
            value={editedBook.title}
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
            value={editedBook.author}
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
            value={editedBook.genre}
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
            value={editedBook.publicationYear}
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
            value={editedBook.rating}
            onChange={handleEditInputChange}
          />
        </div>
        <div className="form group mt-3">
        <button className="btn btn-primary m-2" disabled={isSaveDisabled}>
          Save Changes
        </button>
        <button className="btn btn-secondary m-2">Clear Fields</button>
             </div>
      </form>
    </>
  );
}

export default EditBookForm;
