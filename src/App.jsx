import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import AddCar from "./components/AddCar";
import ViewCars from "./components/ViewCars";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/cars" element={<ViewCars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;