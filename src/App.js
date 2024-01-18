import React, { useEffect }  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView2 from "./views/HomeView2";

import smooth from './utils/smooth'
import link from './utils/link'

const App = () => {
    useEffect( () => {
		smooth();
		link();
	},[]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView2 />} />
            </Routes>
        </BrowserRouter>
        );
}

export default App;