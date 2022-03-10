import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalStateContext";
import { goToDetailsPage } from "../../Router/coordinator";



export default function Pokedex() {

    const {page, setPage} = React.useContext(GlobalContext);

    const navigate = useNavigate();

    const goDetails = () => {
    
        setPage('Voltar')
        localStorage.setItem('page', 'pokedex');
        goToDetailsPage(navigate)
    
      }

    return (
        <div>
        <h1>Pokedex</h1>
        <button onClick={() => goDetails()}>Details</button>
        </div>

    )
}