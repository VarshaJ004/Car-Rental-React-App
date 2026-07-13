import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get(
        "https://host-demo-app.onrender.com/api/cars"
      );
      setCars(response.data);
    } catch (error) {
      console.log(error);
      alert("Failed to fetch cars");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mt-5">
        <h3 className="text-center">Loading...</h3>
      </div>
    );
  }

  return (
    <div>
        <NavBar />
      
    <div className="container mt-5">
       
      <h2 className="text-center mb-4">View All Cars</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Reg No</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Type</th>
              <th>Fuel</th>
              <th>Transmission</th>
              <th>Seats</th>
              <th>Rent/Day</th>
              <th>City</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cars.length > 0 ? (
              cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.registration_number}</td>
                  <td>{car.brand}</td>
                  <td>{car.model}</td>
                  <td>{car.vehicle_type}</td>
                  <td>{car.fuel_type}</td>
                  <td>{car.transmission}</td>
                  <td>{car.seating_capacity}</td>
                  <td>₹{car.rent_per_day}</td>
                  <td>{car.city}</td>
                  <td>{car.availability_status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="text-center">
                  No Cars Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default ViewCars;