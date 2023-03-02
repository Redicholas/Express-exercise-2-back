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

router.get("/", function (req, res, next) {
  res.send(books);
});

router.post("/addbook", function (req, res, next) {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    isAvailable: true,
  };
  books.push(newBook);
  res.send(books);
});

module.exports = router;
