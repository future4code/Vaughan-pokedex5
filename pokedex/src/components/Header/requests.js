import { goToHomePage, goToPokedex } from "../../Router/coordinator";


export const changeButton = (navigate, currentPage, setPage) => {

    if(currentPage === "Lista de Pokémons"){
      setPage("Pokedex")
      goToPokedex(navigate)
    }
    else if(currentPage === "Pokedex"){
      setPage("Voltar para a lista")
      goToHomePage(navigate)
    }
    else if(currentPage === "Detalhes"){
      navigate(-1)
    }
    else if(currentPage === 'Error'){
      setPage("Voltar para a lista")
      goToHomePage(navigate)
    }    
  }

  export const removeFromCart = (id, navigate, pokedexCart, setPokedexCart) => {

    let newPokedex = pokedexCart.filter((item) => {
      return item.id !== id
  })

  setPokedexCart(newPokedex);

  alert('Pokemon Removido Da Pokedex');
  goToPokedex(navigate)

  }

  export const addToCart = (id, navigate, dataDetails, pokedexCart, setPokedexCart) => {
    for (let i = 0; i < dataDetails.length; i++) {
      if (dataDetails[i].id === id) {

        let newPokedex = [...pokedexCart, dataDetails[i]]

        setPokedexCart(newPokedex);

      }
    }
    alert('Pokemon Adicionado a Pokedex');
    goToPokedex(navigate);
  }

  export const removeAddPokedex = (idDetails, navigate, pokedexCart, setPokedexCart, dataDetails) => {
      
    let idsPokedex = pokedexCart && pokedexCart.map((item) =>{return item.id});

      if(idsPokedex.includes(parseInt(idDetails))){
        removeFromCart(parseInt(idDetails), navigate, pokedexCart, setPokedexCart)
        
      }else{
        addToCart(parseInt(idDetails), navigate, dataDetails, pokedexCart, setPokedexCart)
      }

  }