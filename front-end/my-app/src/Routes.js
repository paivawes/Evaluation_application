import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePages from "./Pages/home";
import Contato from "./Pages/contato";

const MainRoutes = () => {
    return(
        <Routes>
            <Route
            path="/"
            element={<HomePages/>}
            />
            <Route
            path="Contato"
            element={<Contato/>}
            />
        </Routes>
    )
}
