// Actions.jsx
import { CONSTANTS } from "../Constants";
import axios from 'axios';

// Action types
export const DELETE_BOOK = 'DELETE_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const ADD_BOOK = 'ADD_BOOK';
export const FETCH_BOOKS = 'FETCH_BOOKS';

// Action creators
export const deleteBook = (id) => ({
    type: DELETE_BOOK,
    payload: id
});

export const editBook = (id, updatedBook) => ({
    type: EDIT_BOOK,
    payload: { id, updatedBook },
});

export const addBook = (book) => ({
    type: ADD_BOOK,
    payload: book,
});

export const fetchBooks = () => {
    return (dispatch) => {
        axios.get(CONSTANTS.backEndUrl)
            .then((response) => {
                dispatch({
                    type: FETCH_BOOKS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Error fetching books:', error);
            });
    };
};

export const createBook = (book) => {
    return (dispatch) => {
        axios.post(CONSTANTS.backEndUrl, book)
            .then((response) => {
                dispatch(addBook(response.data));
            })
            .catch((error) => {
                console.error('Error creating book:', error);
            });
    };
};

export const updateBookRequest = (id, updatedBook) => {
    return (dispatch) => {
        axios.put(`${CONSTANTS.backEndUrl}/${id}`, updatedBook)
            .then((response) => {
                dispatch(editBook(id, response.data));
            })
            .catch((error) => {
                console.error('Error updating book:', error);
            });
    };
};

export const deleteBookRequest = (id) => {
  return (dispatch) => {
      axios.delete(`${CONSTANTS.backEndUrl}/${id}`)
          .then(() => {
              dispatch(deleteBook(id));
          })
          .catch((error) => {
              console.error('Error deleting book:', error);
          });
  };
};

