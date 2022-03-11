import { goToHomePage, goToPokedex } from "../../Router/coordinator";


export const changeButton = (navigate, currentPage, setPage) => {
  //Ele faz a navegação entre as páginas a partir dos botões do Header
  //O currentPage seta a página atual e o setPage a do botão

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
    //Ele pega a pokédex, faz o filtro e remove da pokédex o id do pokémon clicado
    let newPokedex = pokedexCart.filter((item) => {
      return item.id !== id
  })

  setPokedexCart(newPokedex);

  alert('Pokemon Removido Da Pokedex');
  goToPokedex(navigate)

  }
  

  //Adiciona os cards clicados no botão de adicionar
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
      //Ele verifica se o id clicado é igual a função ou de remover ou de adicionar 
      if(idsPokedex.includes(parseInt(idDetails))){
        removeFromCart(parseInt(idDetails), navigate, pokedexCart, setPokedexCart)
        
      }else{
        addToCart(parseInt(idDetails), navigate, dataDetails, pokedexCart, setPokedexCart)
      }

  }