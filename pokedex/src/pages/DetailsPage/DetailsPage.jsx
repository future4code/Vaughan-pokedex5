import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Global/GlobalStateContext";
import DivAttackComp from "./components/DivAttackComp";
import DivPowerComp from "./components/DivPowerComp";
import DivTypeComp from "./components/DivTypeComp";
import { DivCenter, DivSpecies } from "./Styled";

export default function DetailsPage() {
  //Essa função pega o id utilizado no card
  const param = useParams();
  //Aqui estamos pegando estados que vêm do componente global
  const {
    dataDetails,
    setCurrentPage,
    setPage,
    setButtonOfDetails,
    setIdDetails,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentPage("Detalhes");
    setPage("Voltar");
    setButtonOfDetails(true);
    setIdDetails(param.id);
  }, []);

  const detailPokemon =
    dataDetails &&
    dataDetails.filter((item) => {
      return item.id === parseInt(param.id);
    });

  return (
    <DivCenter>
      <DivTypeComp detailPokemon={detailPokemon} />
      <DivSpecies>
        <DivPowerComp detailPokemon={detailPokemon} />
        <img src={detailPokemon[0].sprites.back_default} />
        <img src={detailPokemon[0].sprites.front_default} />
        <DivAttackComp detailPokemon={detailPokemon} />
      </DivSpecies>
    </DivCenter>
  );
}
