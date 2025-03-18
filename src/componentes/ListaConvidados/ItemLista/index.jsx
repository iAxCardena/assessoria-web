import styled from "@emotion/styled/macro"
import { Divider, Grid2, IconButton, ThemeProvider } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from '../../../theme.ts';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const CardEstilizado = styled.li`
    padding: 10px;
    background-color: "#321321";
    display: block;
`
const TextoEstilizado = styled.p`
    margin: 0;
    color: ${(props) => props.color ? props.color : "#000000"};
`
const StyledPriorityHighIcon = styled(PriorityHighIcon)`
    width: 15px;
    height: 15px;
    padding: 5px;
    background-color: ${(props) => props.color ? props.color : "#000000"};
    border-radius: 50%;
    margin: 0 4px 0 -25px;
`
const StyledCheckIcon = styled(CheckIcon)`
    width: 15px;
    height: 15px;
    padding: 5px;
    background-color: ${(props) => props.color ? props.color : "#000000"};
    border-radius: 50%;
    margin: 0 4px 0 16px;
`
const StyledCloseIcon = styled(CloseIcon)`
    width: 15px;
    height: 15px;
    padding: 5px;
    background-color: ${(props) => props.color ? props.color : "#000000"};
    border-radius: 50%;
    margin: 0 4px 0 16px;
`

export const ItemLista = ({convidado}) => {
    return (
        <ThemeProvider theme={theme}>
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
                <Grid2 display={"flex"} alignItems={"center"} size={{ xs: 2, sm: 3, md: 3 }}>
                    <StyledPriorityHighIcon color={theme.palette.warning.main}/>
                    0
                    <StyledCheckIcon color={theme.palette.success.main}/>
                    0
                    <StyledCloseIcon color={theme.palette.error.main}/>
                    0
                </Grid2>
                <IconButton>
                    <MoreHorizIcon />
                </IconButton>
            </Grid2>
        </CardEstilizado>
        </ThemeProvider>
    )
}