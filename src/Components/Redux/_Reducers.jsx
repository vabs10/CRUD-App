const { Console } = require("console");
const initialState = require("../Data/Data.json");

const bookReducer  = (state=initialState, action) => {
    switch (action.type){
        case "Delete":
            console.log("Deleting Book", action.payload);
            return{
                ...state,
                books: state.books.filter((book)=> book.id !== action.payload),
            };

            case "Add":
                console.log("Adding Movie: ", action.payload);
                return{
                    ...state,
                    books:[...state.movies, action.payload],
                };
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