import styled from "@emotion/styled/macro"
import { Divider, Grid2, IconButton } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

// const TextoEstilizado = styled.p(({variant}) => {
    
// })
const CardEstilizado = styled.li`
    padding: 10px;
    background-color: "#321321";
    display: block;
`

const TextoEstilizado = styled.p`
    margin: 0;
    color: ${(props) => props.color ? props.color : "#000000"};
`

export const ItemLista = ({convidado}) => {
    return (
        <>
        <Divider/>
        <CardEstilizado>
            <Grid2 container spacing={{ xs: 2, md: 3 }}>
                <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                    <TextoEstilizado>{convidado.nome}</TextoEstilizado>
                    <TextoEstilizado color={"#908e8c"}>{convidado.telefone}</TextoEstilizado>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                    <TextoEstilizado>{convidado.grupo != null ? convidado.grupo : "-"}</TextoEstilizado>
                </Grid2>
                <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
                    <TextoEstilizado>{convidado.resposta}</TextoEstilizado>
                </Grid2>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
                
            </Grid2>
            
            
        </CardEstilizado>
        </>
    )
}