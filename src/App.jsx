import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Feeling from "./pages/Feeling";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/result" element={<Feeling/>} />
            </Routes>
        </Router>
    );
}
