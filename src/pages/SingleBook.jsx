import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleBook = () => {
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  const redirectToUpdatePage = () => {
    navigate("/updatebook/" + book._id);
  };

  const deleteBook = async () => {
    axios
      .delete(`/api/v1/books/${book._id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    navigate("/books");
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/api/v1/books/${id}`)
      .then((response) => {
        setBook(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className=" w-full h-screen flex ">
      <div className="w-[50%] h-full">
        <img
          className="w-full h-full object-cover "
          src={
            book.image?.url
              ? book.image?.url
              : "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2t8ZW58MHx8MHx8fDA%3D"
          }
          alt=""
        />
      </div>
      <div className="w-[50%] h-full p-10">
        <h1 className="text-3xl text-black font-semibold ">
          Author of this Book :
        </h1>
        <p className="text-xl text-gray-600 my-4">{book.author}</p>
        <h1 className="text-3xl text-black font-semibold ">
          Description of this Book :
        </h1>
        <p className="text-xl text-gray-600 my-4">{book.description}</p>
        <h1 className="text-3xl text-black font-semibold ">
          Price of this Book :
        </h1>
        <p className="text-xl text-gray-600 my-4">{book.price}</p>
        <button
          onClick={redirectToUpdatePage}
          className="py-2 px-4 m-4 bg-blue-600 text-white rounded-lg border hover:bg-blue-500"
        >
          Update a Book
        </button>
        <button
          onClick={deleteBook}
          className="py-2 px-4 m-4 bg-blue-600 text-white rounded-lg border hover:bg-blue-500"
        >
          Delete a Book
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
