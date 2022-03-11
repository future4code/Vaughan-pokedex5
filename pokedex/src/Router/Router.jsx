import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";
import Pokedex from "../pages/Pokedex/Pokedex";

export default function Router() {
  //Página de transição de páginas, todas as que utilizaremos que são 4
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Details/:id" element={<DetailsPage />} />
        <Route exact path="/Pokedex" element={<Pokedex />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
