import { Link } from "react-router-dom";
function Book({SlNo, book, handleDelete}) {
  // console.log("book",book.id);
    const toLink = `/edit/book/${book.id}`
   
    return ( <>
    <tr>
              <td>{SlNo}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.publicationYear}</td>
              <td>{book.rating}</td>
              <td>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => handleDelete(book.id)}
                >
                  Delete
                </button>
                
                <Link to={toLink}>
                    
                  <button className="btn btn-primary m-1" book={book}>Edit</button>
                </Link>
              </td>
            </tr>
    </> );
}

export default Book;