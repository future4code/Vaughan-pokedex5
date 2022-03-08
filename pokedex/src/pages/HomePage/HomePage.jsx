import React from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"
import axios from 'axios'
import { urlBase } from "../../constants/urls"
import {useState, useEffect} from 'react'


export default function HomePage() {

    const [pokemon, setPokemon] = useState([])
    const [pokemonSprite, setSprite] = useState([])
    


    useEffect(() =>{
        requestPokemon()

    }, [])
     
    const requestPokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20").
        then((response) => {
            setPokemon(response.data.results)

            // console.log(response.data.results)

        }).catch((err) => {
            console.log(err)

        })
    }

    const requestSprite = (name) => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}/`).
        then((response) => {
            setSprite(response.data.sprites)
            console.log(response.data.sprites)
            
        }).catch((err) =>{
            console.log(err)
        })
    }
 
    
  
    return (
        <div>
            <h1>HomePage</h1>
            <PokemonCard/>
            {pokemon && pokemon.map((item) =>{
                return <p>{requestSprite(item.name)}</p>

            })}
       </div>
    )
}