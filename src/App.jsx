import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";

import AddCar from "./components/AddCar";
import ViewCar from "./components/ViewCar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<ViewCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;