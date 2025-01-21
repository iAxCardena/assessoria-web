import styled from "styled-components";

const HeaderEstilizado = styled.header`
  background-color: #2c2c2c;
  display: flex;
  justify-content: start;
  text-align: center;
`
  
const TituloEstilizado = styled.h1`
  color: #FFFFFF;
  display: block;
  text-align: center;
`

export default function Header() {
    return(
        <HeaderEstilizado>
					<TituloEstilizado>Assessoria</TituloEstilizado>
        </HeaderEstilizado>
    );
}