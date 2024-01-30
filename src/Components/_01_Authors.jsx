import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./Redux/Actions";
import { Link } from "react-router-dom";
import Book from "./_02_Books";

function Table() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    publicationYear: "",
    rating: "",
  });

  if (!books) {
    return <div>Loading books...</div>;
  }
  if (books.error) {
    return <div>Error fetching books: {books.error}</div>;
  }

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };
return (
    <div className="container mt-4">
      <Link to="/add-book" className="btn btn-primary">
        Add Book
      </Link>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sl.No</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Genre</th>
            <th scope="col">Publication Year</th>
            <th scope="col">Rating</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return <Book
            key={book.id}
            SlNo={index+1}
            books={books}
            handleDelete={handleDelete} />
          }
            
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
