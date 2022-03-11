import { DivPower } from "../Styled";





export default function DivPowerComp(props){

   const detailPokemon = props.detailPokemon;

    return(
    <DivPower>
        <h2>Poderes</h2>
        <p>Hp : {detailPokemon[0].stats[0].base_stat}</p>
        <p>Ataque : {detailPokemon[0].stats[1].base_stat}</p>
        <p>Defesa : {detailPokemon[0].stats[2].base_stat}</p>
        <p>Ataque Especial : {detailPokemon[0].stats[3].base_stat}</p>
        <p>Defesa Especial : {detailPokemon[0].stats[4].base_stat}</p>
        <p>Velocidade : {detailPokemon[0].stats[5].base_stat}</p>
    </DivPower>     
    )
}