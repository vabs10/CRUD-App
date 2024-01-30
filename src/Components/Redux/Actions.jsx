export const deleteBook = (id) => ({
    type:"Delete",
    payload: id
});
export const editBook = (id, updatedBook) => ({
    type:"Edit",
    payload: {id, updatedBook},
});

export const addBook = (book) => ({
    type:"Add",
    payload: book,
})