import styled from "styled-components";


export const GridPokedex = styled.div`
  display: grid ;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  align-self: center;
  margin-top: 20px;

  h1{
    grid-area: 1/3;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
`