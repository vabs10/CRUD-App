import { Route, Routes } from "react-router-dom";
import AddBookForm from "./AddBook";
import EditBookForm from "./EditBook";
import { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux'
import {
    fetchBooks, 
    deleteBookRequest,
} from './Redux/Actions';
import Table from "./_01_Authors";

function BookRouters() {

    const dispatch = useDispatch();
    const books = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteBookRequest(id));
    };

    return (
        <>
            <Routes>
                <Route path="/books" element={<Table books={books} handleDelete={handleDelete} />}></Route>
                <Route path="/add" element={<AddBookForm />}> </Route>
                <Route path="/edit/book/:id" element={<EditBookForm books={books} />}></Route>
            </Routes>
        </>
    );
}

export default BookRouters;