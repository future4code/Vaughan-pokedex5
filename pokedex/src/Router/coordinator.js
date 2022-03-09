export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToDetailsPage = (navigate, id) => {
    navigate(`/Details/${id}`)
}

export const goToPokedex = (navigate) => {
    navigate("/Pokedex")
}