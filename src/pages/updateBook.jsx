import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
  });

 const navigate = useNavigate();  

  const updateBook = async () => {
    axios
      .put(`/api/v1/books/${id}`, data)
      .then((response) => {
        console.log(response);
        navigate("/singlebook"+id)
      })
      .catch((err) => console.log(err));

  };

  return (
    <div className="w-full h-screen flex justify-center items-center ">
      <div className="w-[40%] h-[50%] flex flex-col justify-evenly border p-10 rounded-lg border-2">
        <input
          className="   p-2 rounded-lg  border-2"
          type="text"
          value={data?.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          placeholder="Name"
        />

        <input
          className="   p-2 rounded-lg  border-2"
          type="text"
          value={data?.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          placeholder="Description"
        />

        <input
          className="   p-2 rounded-lg  border-2"
          type="number"
          value={data?.price}
          onChange={(e) => setData({ ...data, price: e.target.value })}
          placeholder="Price"
        />

        <button
          onClick={updateBook}
          className="w-full p-2 bg-blue-600 rounded-lg text-white"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateBook;
