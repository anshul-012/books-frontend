import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {

  const navigate = useNavigate()

  const signInHandler = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    await axios.post("/api/v1/books/",formData);

    navigate("/books")
  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <form
      onSubmit={signInHandler} 
      className="w-[40%] h-[60%] flex flex-col justify-evenly border p-6 rounded-lg border-2">
        <input
          className="   p-2 rounded-lg  border-2"
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          className="   p-2 rounded-lg  border-2"
          type="text"
          name="description"
          placeholder="Description"
        />

        <input
          className="   p-2 rounded-lg  border-2"
          type="number"
          name="price"
          placeholder="Price"
        />
        <input
          className="   p-2 rounded-lg  border-2"
          type="text"
          name="author"
          placeholder="Author"
        />
        <input
          className="   p-2 rounded-lg  border-2"
          type="file"
          name="image"
          placeholder="Image"
        />

        <button type="submit" className="w-full p-2 bg-blue-600 rounded-md text-white">
          Add +
        </button>
      </form>
    </div>
  );
};

export default AddBook;
