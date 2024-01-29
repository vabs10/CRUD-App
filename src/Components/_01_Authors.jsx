import React from 'react';
import { useSelector } from 'react-redux';

function Table() {
  const books = useSelector((state) => state);

  if (!books) {
    return <div>Loading books...</div>;
  }
  if (books.error) {
    return <div>Error fetching books: {books.error}</div>;
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
