const express = require("express");
const {
  addBook,
  fetchAllBooks,
} = require("../../controllers/admin/books-controller");


const router = express.Router();




router.post("/add", addBook);
router.get("/get", fetchAllBooks);

module.exports = router;
