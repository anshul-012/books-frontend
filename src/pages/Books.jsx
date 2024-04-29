import React, { useEffect, useState } from "react";
import Bookcard from "../components/Book-card";
import axios from "axios";

const Books = () => {

  const [books, setBooks] = useState([]); 

  useEffect(() => {
    axios.get("/api/v1/books/").then((response) => {
      setBooks(response.data.data);
    });
  }, []);
  
  return (
    <div className="w-full h-screen flex justify-start gap-[5%] flex-wrap p-10">
      {books.map((book, idx) => (
        <Bookcard book={book} key={idx} />
      ))}
    </div>
  );
};

export default Books;
