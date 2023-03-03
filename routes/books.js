var express = require("express");
var router = express.Router();

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isAvailable: true,
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    isAvailable: false,
  },
  {
    id: 3,
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
    isAvailable: true,
  },
];

router.get("/", function (req, res) {
  res.send(books);
});

router.get("/bookid/:id", function (req, res) {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("The book with the given ID was not found.");
  }
  res.send(book);
});

router.post("/addbook", function (req, res) {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    isAvailable: true,
  };
  books.push(newBook);
  res.send(books);
});

router.post("/borrowbook/:id", function (req, res) {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("The book with the given ID was not found.");
  }
  book.isAvailable = false;
  res.send(book);
});

router.get("/borrowedbooks", function (req, res) {
  const borrowedBooks = books.filter((book) => book.isAvailable === false);
  if (!borrowedBooks) {
    res.status(404).send("No borrowed books found.");
  }

  res.send(borrowedBooks);
});

router.post("/returnbook/:id", function (req, res) {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("The book with the given ID was not found.");
  }
  book.isAvailable = true;
  res.send(book);
});

module.exports = router;
