import styled from "styled-components";


export const GridPokedex = styled.div`
  display: grid ;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  align-self: center;
  margin-top: 20px;


  p{
    font-size: 2em;
    font-weight: bold;
    grid-area: 1/3;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: red;

    img{
      width: 800px;
    }
  }
  @media(max-width: 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
      justify-content: center;
      margin-left: 10px;
      img{
      width: 100%;
      margin-top: 100px;
    }
    }
  }
`