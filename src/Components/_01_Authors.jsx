import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, addBook } from './Redux/Actions';

function Table() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: '',
    rating: '',
  });

  if (!books) {
    return <div>Loading books...</div>;
  }
  if (books.error) {
    return <div>Error fetching books: {books.error}</div>;
  }

  const handleDelete = (id) => {
    // Dispatch the deleteBook action with the book id
    dispatch(deleteBook(id));
  };

  const handleAdd = () => {
    dispatch(addBook(newBook));

    // Clear the form fields after adding the book
    setNewBook({
      title: '',
      author: '',
      genre: '',
      publicationYear: '',
      rating: '',
    });
  }

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Publication Year</th>
            <th scope="col">Rating</th>
            <th scope='col'>Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book.id}>
              <th scope="row">{index + 1}</th>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publicationYear}</td>
              <td>{book.rating}</td>
              <td><button className='btn btn-danger' onClick={() => handleDelete(book.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                placeholder="Title"
              />
            </td>
            <td>
              <input
                type="text"
                name="author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                placeholder="Author"
              />
            </td>
            <td>
              <input
                type="text"
                name="genre"
                value={newBook.genre}
                onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
                placeholder="Genre"
              />
            </td>
            <td>
              <input
                type="text"
                name="publicationYear"
                value={newBook.publicationYear}
                onChange={(e) => setNewBook({ ...newBook, publicationYear: e.target.value })}
                placeholder="Publication Year"
              />
            </td>
            <td>
              <input
                type="text"
                name="rating"
                value={newBook.rating}
                onChange={(e) => setNewBook({ ...newBook, rating: e.target.value })}
                placeholder="Rating"
              />
            </td>
            <td>
              <button className="btn btn-success" onClick={handleAdd}>
                Add
              </button>
            </td>
            <td colSpan={2}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
