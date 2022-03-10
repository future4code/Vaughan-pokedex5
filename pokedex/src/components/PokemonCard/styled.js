import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #66a3ff;
  border-radius: 10px;
  box-shadow: 0px 2px 10px black;
  width: 250px;   
  margin: auto;
  /* margin-bottom: 10px;
  margin-left: 10px; */
`;

export const CardMedia = styled.img`
width: 100%;
height: 200px;
`;

export const AlignText = styled.h3`
text-align: center;
font-weight: bold;
font-size: 1em;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const CardFooter = styled.div`
 height: 30px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

export const Button = styled.button`
background-color: #0088cc;
border-color: #0088cc;
border-radius: 5px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: white;
height: 100%;
margin-bottom: 10px;
margin-left: 5px;
margin-right: 5px;
:hover{
  cursor: pointer;
}
`