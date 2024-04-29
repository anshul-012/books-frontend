import React from "react";
import { Link } from "react-router-dom";

const Bookcard = ({book}) => {
  return (
    <Link to={"/singlebook/"+book._id} className="w-[30%] h-[45%]  border-2 rounded-lg overflow-hidden">
      <img
        className="h-[60%] w-full object-cover "
        src={book.image.url ? book.image.url : "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"}
        alt="book-image"
      />
      <div className="h-[40%] w-full px-4 pt-2 ">
        <h1>Author : {book.author}</h1>
        <p className=" text-gray-600  ">Description</p>
        <p>{book.description}</p>
        <p>Price : ₹ {book.price}</p>
      </div>
    </Link>
  );
};

export default Bookcard;
