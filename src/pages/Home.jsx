import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToBookPage = () => {
    navigate("/books");
  };

  const redirectToAddbookPage = () => {
    navigate("/addbook");
  };

  return (
    <div className="text-black flex ">
      <div className="w-[50%] h-screen ">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="w-[50%] h-screen flex justify-center items-center   ">
        <div className=" w-[60%] ">
          <h1 className="text-xl ">
            Your one-stop online solution. for{" "}
            <span className="text-2xl text-blue-500 font-bold">
              READING BOOKS.
            </span>
          </h1>

          <div >
            <button
              onClick={redirectToBookPage}
              className="m-4 py-2 px-4 border rounded-lg bg-blue-600 text-white hover:bg-blue-500"
            >
              Explore now
            </button>

            <button
              onClick={redirectToAddbookPage}
              className="my-4 py-2 px-4 border rounded-lg bg-blue-600 text-white hover:bg-blue-500"
            >
              Add a Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
