import { useState } from "react";
import { BaseURL } from "../constants/urls";
import useRequestData from "../Hooks/useRequestData";
import { GlobalContext } from "./GlobalStateContext";

export const GlobalState = (props) => {


  const [data, dataDetails] = useRequestData([], `${BaseURL}pokemon/`);
  const [page, setPage] = useState("Pokedex");


  const globalData = {page, setPage, data, dataDetails}

  return (
    <GlobalContext.Provider value={globalData}>
      {props.children}
    </GlobalContext.Provider>
  );
};
