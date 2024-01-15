import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView2 from "./views/HomeView2";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView2 />} />
            </Routes>
        </BrowserRouter>
        );
}

export default App;