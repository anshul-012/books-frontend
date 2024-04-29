import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import UpdateBook from "./pages/updateBook";
import AddBook from "./pages/AddBooks";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/books" element={<Books />} />
        <Route path="/singlebook/:id" element={<SingleBook />} />
        <Route path="/updatebook/:id" element={<UpdateBook />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
