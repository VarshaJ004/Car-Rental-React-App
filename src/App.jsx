import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import AddCar from "./components/AddCar";
import ViewCars from "./components/ViewCars";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<ViewCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;