import { DivAttack } from "../Styled";



export default function DivAttackComp(props){


    const detailPokemon = props.detailPokemon;


    return(
        <DivAttack>
               <h2>Principais Ataques</h2>
               <p>{detailPokemon[0].moves[0] ? detailPokemon[0].moves[0].move.name: null}</p>
               <p>{detailPokemon[0].moves[1] ? detailPokemon[0].moves[1].move.name: null}</p>
               <p>{detailPokemon[0].moves[2] ? detailPokemon[0].moves[2].move.name: null}</p>
               <p>{ detailPokemon[0].moves[3] ? detailPokemon[0].moves[3].move.name: null}</p>
               <p>{detailPokemon[0].moves[4] ? detailPokemon[0].moves[4].move.name: null }</p>
        </DivAttack>
    )
}