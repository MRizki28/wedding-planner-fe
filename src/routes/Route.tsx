import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navbar></Navbar>} />
        </Routes>
    )
}