const Book = require("../../models/Book");
const ApiResponse = require("../../custom-response/ApiResponse");
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../../errors')

// Add a new Book
const addBook = async (req, res) => {
  const { title, price, Quantity } = req.body;

  // Validate required fields
  if (!title || !price) {
    throw new BadRequestError('Missing required data');
  }


  // Create the book in database
  await Book.create({ ...req.body });

  const response = new ApiResponse({
    statusCode: StatusCodes.CREATED,
    success: true,
    msg: "Book added successfully",
    data: null,
  });

  res.status(response.statusCode).json(response);
};

// Fetch all books with pagination
const fetchAllBooks = async (req, res) => {

  const Books = await Book.find()
    .sort({ createdAt: -1 })


  if (!Books) {
    throw new BadRequestError("No Books found");
  }

  // Send paginated response
  const response = new ApiResponse({
    msg: "Books fetched successfully",
    data: {
      Books,
    },
    statusCode: StatusCodes.OK,
  });

  res.status(response.statusCode).json(response);
};


module.exports = {
  addBook,
  fetchAllBooks,
};
