var express = require("express");
var router = express.Router();

const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
  },
  {
    id: 3,
    title: "The Silmarillion",
    author: "J.R.R. Tolkien",
  },
];

router.get("/", function (req, res, next) {
  res.send(books);
});

module.exports = router;
