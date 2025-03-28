const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"]
    },
    price: {
      type: Number,
      required: [true, "Please provide price"]
    },
    Quantity: {
      type: Number,
      required: [true, "Please provide Quantity"]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BooksSchema);
