import React from "react";
import NavBar from "./Navbar";
import "./Car.css"


const Home = () => {
  return (
    <div className="container mt-5">
       
      <div className="text-center">

        <h1 className="display-4 fw-bold">
          Car Rental Management System
        </h1>

        <p className="lead mt-3">
          Welcome to the Vehicle Rental Application.
        </p>

        <p>
          Use the navigation bar to add new cars to the fleet and view all
          available rental cars.
        </p>

      </div>
    </div>
  );
};

export default Home;