import { FETCH_BOOKS, ADD_BOOK, EDIT_BOOK, DELETE_BOOK } from "./Actions";
// const initialState = [...require("../Data/Data.json")];
const bookReducer = (state = [], action) => {
  switch (action.type) {
    case DELETE_BOOK:
      console.log("Deleting Book", action.payload);
      const deletedBooks = state.filter((book) => book.id !== action.payload);
      return deletedBooks;

    case ADD_BOOK:
      console.log("Adding Book: ", action.payload);
      return [...state, action.payload];

    case EDIT_BOOK:
      console.log("Editing Book: ", action.payload.updatedBook);
      return state.map((book) =>
        book.id === action.payload.updatedBook.id ? action.payload.updatedBook : book
      );

    case FETCH_BOOKS:
      return action.payload;

    default:
      return state;
  }
};

export default bookReducer;
