import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Renter from "./pages/renterSignup";
import RenterDashboard from "./pages/dashboard";
import AppLayout from "./component/appLayout";
import RenterCars from "./pages/renterCars";
import RenterBooking from "./pages/renterBookings";
import AddCar from "./pages/addCar";
import CarList from "./pages/carList";
import CarPreview from "./pages/carPreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<RenterDashboard />} />
          <Route path="/renterCar" element={<RenterCars />} />
          <Route path="/renterBooking" element={<RenterBooking />} />
          <Route path="/addCar" element={<AddCar />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Renter />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/carPreview" element={<CarPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
