import axios from "axios";
import { useEffect, useState } from "react";

//Paramêtros da requisição
const useRequestData = (initialData, url) => {

  const [data, setData] = useState(initialData);
  const [dataDetails, setDataDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const [error, setError] = useState("");

  //Ele já mostra logo de cara a lista de pokémons
  useEffect(() => {
    getData(url);
  }, [url]);

  //O async serve para mostrar que aqui será uma função assíncrona
  const getData = async (url) => {
    setIsLoading(true);

    try {
      const response = await axios.get(url);
      setData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {

    let pokemonsList = [];

    data.forEach((pokemon) => {
      const getPokemon = async () => {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}` 
          );
          //Está adicionando os pokémons até o valor 20 dentro da pokemonList
          pokemonsList.push(response.data);
          if (pokemonsList.length === 20) {
            setDataDetails(pokemonsList);
          }
        } catch (error) {
          console.log(error);
        }
      };
      return getPokemon();
    });
  }, [data]);

  return [data, dataDetails, getData, isLoading, error];
};

export default useRequestData;
