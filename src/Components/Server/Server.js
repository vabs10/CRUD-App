const express = require("express");
const app = express();
let books = require("../Data/Data.json");

// We do GET request to get all data from the JSON

app.get("/api/books", (req, res) => {
  // console.log("All books invoked", books);
  res.send(books);
});

//We do DELETE request to delete the data from the array and for this we need an id as input for which element we need to delete

app.delete("/api/books/:id", (req, res) => {
  let bookId = req.params.id;
  bookId = Number(bookId);

  books = books.filter((book) => book.id !== bookId);

  res.send(books);
});

app.use(express.json());

// We do POST call to add elements to our list

app.post("/api/books", (req, res) => {
  const book = req.body;

  if (
    !book.title ||
    !book.author ||
    !book.genre ||
    !book.publicationYear ||
    !book.rating
  ) {
    res.send("Some data is missing please check");
  } else {
    const newBook = { id: books.length + 1, ...book };
    books.push(newBook);
    res.send(books);
  }
});

// We do PUT call to edit elements and to know which element we are editing we need the id after url and we have send back the edited element to the list

app.put("/api/books/:id", (req, res) => {
  let bookId = req.params.id;

  bookId = Number(bookId);
  const book = req.body;

  if (
    !book.id ||
    !book.title ||
    !book.author ||
    !book.genre ||
    !book.publicationYear ||
    !book.rating
  ) {
    res.send("Some data is missing please check");
  } else {
    books = books.map((ebook) => {
      if (ebook.id == bookId) {
        return book;
      } else {
        return ebook;
      }
    });
  }

  res.send(books);
});

// Added the port where it can display the data
app.listen(8082);
