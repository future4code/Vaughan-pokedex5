import { useState } from "react";
import { BaseURL } from "../constants/urls";
import useRequestData from "../Hooks/useRequestData";
import { GlobalContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  //
  const [data, dataDetails] = useRequestData([], `${BaseURL}pokemon/`);
  const [page, setPage] = useState("Pokedex");
  const [pokedexCart, setPokedexCart] = useState([]);
  const [currentPage, setCurrentPage] = useState("");
  const [buttonOfDetails, setButtonOfDetails] = useState(false);
  const [idDetails, setIdDetails] = useState("");

  const globalData = {
    page,
    setPage,
    data,
    dataDetails,
    pokedexCart,
    setPokedexCart,
    currentPage,
    setCurrentPage,
    buttonOfDetails,
    setButtonOfDetails,
    idDetails,
    setIdDetails,
  };

 //Ele passa uma props que vai ser acessada por todos os estados filhos a partir do ´props.children´
//  O Provider é o provedor que levará o value {globaldata}
  return (
    <GlobalContext.Provider value={globalData}>  
      {props.children}
    </GlobalContext.Provider>
  );
};
