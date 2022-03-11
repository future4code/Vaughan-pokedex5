import styled from 'styled-components';

export const HeaderButton = styled.button`
background-color: #0088cc;
box-shadow: 0px 2px 5px white;
border-radius: 5px;
padding: 0 1%;
height: 30px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: bold;
color: white;
:hover{
    cursor: pointer;
}
`

export const HeaderButton2 = styled.button`
background-color: #0088cc;
box-shadow: 0px 2px 5px white;
border-radius: 5px;
padding: 0 1%;
height: 30px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-weight: bold;
color: white;
:hover{
    cursor: pointer;
}
@media(max-width: 600px){
    width: 200px;
    display: flex;
    align-items: center;
    padding: 15px 1px;
}

`
