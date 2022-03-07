import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from '../pages/HomePage/HomePage'
import Pokedex from "../pages/Pokedex/Pokedex";




export default function Router(){
    return(
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<HomePage />}/>
             <Route path="/Details/:id" element={<DetailsPage />}/>
             <Route path="/Pokedex" element={<Pokedex />}/>
             <Route path="*" element={<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
    )
}