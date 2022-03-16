import styled from 'styled-components'

export const GridCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  width: 100%;
  align-self: center;
  justify-content: center;
  margin: 20px 0;
@media(max-width: 600px){
  grid-template-columns: 1fr;
}

`
