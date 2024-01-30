const initialState = require("../Data/Data.json");

const bookReducer  = (state=initialState, action) => {
    switch (action.type){
        case "Delete":
            console.log("Deleting Book", action.payload);
            const deletedBooks = state.filter(book => book.id !== action.payload);
            return deletedBooks;

            case "Add":
                console.log("Adding Movie: ", action.payload);

                // const addedBooks = [...state];
                return [...state, action.payload];                
                // return{
                //     ...state,
                //     books:[...state.books, action.payload],
                // };
                case "Edit":
                    console.log("Edited Movie", action.payload);
                    return{
                        ...state,
                        books: state.books.map((book) => 
                        book.id === action.payload.id ? action.payload.updatedBook : book
                        )
                    }
            default:
                return state;
    }

};

export default bookReducer;