import { useContext, useEffect } from 'react'
import { GlobalContext } from "../../Global/GlobalStateContext";



export default function ErrorPage(){
    
    const {setCurrentPage, setPage} = useContext(GlobalContext)

    useEffect(()=>{
        setCurrentPage('Error');
        setPage("Voltar para a lista");
    },[])



    return(
        <h1>Erro Pagina não encontrada</h1>
    )
}