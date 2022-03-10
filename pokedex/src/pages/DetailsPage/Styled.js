import styled from "styled-components";

export const DivCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% auto;
  width: 80%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

  img{
    width: 200px;
  }

`;

export const DivSpecies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
 
`;

export const DivPower = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px black;
  padding: 0 5%;
  border-radius: 10px;
`;

export const DivAttack = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 5px black;
  padding: 0 5%;
  border-radius: 10px;
  
`;

export const DivType = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px black;
  width: 30%;
  border-radius: 10px;
`;
