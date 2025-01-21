import styled from "@emotion/styled/macro"
import { Button } from "@mui/material"

const Container = styled.div`
	background-color: #e0e0e0;
	height: 100vh;
    padding: 20px 20px 0 20px;
`

const TituloEstilizado = styled.h1`
    margin: 0;
    color: #3c3c3c;
    display: inline;
    text-align: right;
    background-color: #ffffff;
`

const BotaoEstilizado = styled(Button)`
    background-color: #3c3c3c;
    text-align: right;
`

const Div = styled.div`
    justify-content: space-between;
`

export default function ListaConvidados() {
    return(
        <Container>
            <Div>
                <TituloEstilizado>Lista de Convidados</TituloEstilizado>
                <BotaoEstilizado variant="contained">Adicionar convidado</BotaoEstilizado>
            </Div>
        </Container>
    )
}