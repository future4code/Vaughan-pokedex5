import { useContext } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../Global/GlobalStateContext";
import { DivCenter, DivPower, DivAttack, DivType, DivSpecies} from "./Styled";


export default function DetailsPage(){
    
    const param = useParams();
    const {dataDetails} = useContext(GlobalContext);

    const detailPokemon = dataDetails && dataDetails.filter((item) => {

        return (item.id === parseInt(param.id))

    })
    return(
        <DivCenter>
               <DivType>
                    <h2>Especie</h2>
                    <p>{detailPokemon[0].types[0] ? detailPokemon[0].types[0].type.name : null}</p>
                    <p>{detailPokemon[0].types[1] ? detailPokemon[0].types[1].type.name : null}</p>
                </DivType>
        <DivSpecies>
            <DivPower>
                <h2>Poderes</h2>
                <p>Hp : {detailPokemon[0].stats[0].base_stat}</p>
                <p>Ataque : {detailPokemon[0].stats[1].base_stat}</p>
                <p>Defesa : {detailPokemon[0].stats[2].base_stat}</p>
                <p>Ataque Especial : {detailPokemon[0].stats[3].base_stat}</p>
                <p>Defesa Especial : {detailPokemon[0].stats[4].base_stat}</p>
                <p>Velocidade : {detailPokemon[0].stats[5].base_stat}</p>
            </DivPower>     
            <img src={detailPokemon[0].sprites.other.home.front_default}/>
            <DivAttack>
               <h2>Principais Ataques</h2>
               <p>{detailPokemon[0].moves[0].move.name}</p>
               <p>{detailPokemon[0].moves[1].move.name}</p>
               <p>{detailPokemon[0].moves[2].move.name}</p>
               <p>{detailPokemon[0].moves[3].move.name}</p>
               <p>{detailPokemon[0].moves[4].move.name}</p>
            </DivAttack>
        </DivSpecies>
        </DivCenter>
    )
}