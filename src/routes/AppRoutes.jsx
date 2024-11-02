import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GetData from '../components/MyRequests/MyRequests.jsx';
import SignUp from "../pages/Citizen/SignUp.jsx";
import HomeCitizen from "../pages/Citizen/HomeCitizen.jsx";
import Login from "../pages/Citizen/Login.jsx";
import ServiceSelection from "../pages/Citizen/ServiceSelection.jsx";
import EmployeeRegisterForm from "../pages/Goverment/Admin/RegisterEmployee.jsx";
import AddNewService from "../pages/Goverment/Admin/AddService.jsx";
import LoginGoverment from "../pages/Goverment/Login.jsx";
import ServiceAdd from "../pages/Citizen/ServiceRequest.jsx";
import HomeEmployee from "../pages/Goverment/HomeEmployee.jsx";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomeCitizen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/service-request" element={<ServiceAdd />} />
                <Route path="/service-selection" element={<ServiceSelection />} />
                <Route path="/sign-up" element={<SignUp/>}/>
                <Route path="/add-new-service" element={<AddNewService />} />
                <Route path="/register-employee" element={<EmployeeRegisterForm />} />
                <Route path="/login-goverment" element={<LoginGoverment />} />
                <Route path="/home-employee" element={<HomeEmployee />} />

                <Route path="/" element={<GetData />}/>
          

            </Routes>
        </BrowserRouter>
    )
 }

 export default AppRouter;