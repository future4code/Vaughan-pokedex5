import { DivType } from "../Styled";



export default function DivTypeComp(props) {

    const detailPokemon = props.detailPokemon;

    return (
        <DivType>
            <h2>Especie</h2>
            <p>{detailPokemon[0].types[0] ? detailPokemon[0].types[0].type.name : null}</p>
            <p>{detailPokemon[0].types[1] ? detailPokemon[0].types[1].type.name : null}</p>
        </DivType>
    )
}