import React, { useState } from 'react';
import styled from "@emotion/styled/macro";
import theme from '../../../theme.ts';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Grid2, IconButton, ThemeProvider, Tooltip } from "@mui/material"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const CardEstilizado = styled.li`
    margin: 10px;
    padding: 10px;
    border: 1px solid;
    border-color: ${props => props.bordercolor};
    border-radius: 5px;
    display: block;
    &:hover {
        cursor: pointer;
    }
`
const TextoEstilizado = styled.p`
    margin: 0;
    color: ${(props) => props.color ? props.color : "#000000"};
`
const StyledPriorityHighIcon = styled(PriorityHighIcon)`
    width: 14px;
    height: 14px;
    padding: 5px;
    background-color: ${(props) => props.currentanswer==="pending" ? (props.color != null ? props.color : props.defaultcolor) : props.defaultcolor};
    border-radius: 20%;
    color: white;
    stroke: white;
    stroke-width: 2px;
    margin: 0 0 0 -25px;
    :hover {
        cursor: pointer;
    }
`
const StyledCheckIcon = styled(CheckIcon)`
    width: 14px;
    height: 14px;
    padding: 5px;
    background-color: ${(props) => props.currentanswer==="confirmed" ? (props.color != null ? props.color : props.defaultcolor) : props.defaultcolor};
    border-radius: 20%;
    color: white;
    stroke: white;
    stroke-width: 2px;
    margin: 0 0 0 5px;
    :hover {
        cursor: pointer;
    }
`
const StyledCloseIcon = styled(CloseIcon)`
    width: 14px;
    height: 14px;
    padding: 5px;
    background-color: ${(props) => props.currentanswer==="canceled" ? (props.color != null ? props.color : props.defaultColor) : props.defaultcolor};
    border-radius: 20%;
    color: white;
    stroke: white;
    stroke-width: 2px;
    margin: 0 0 0 5px;
    :hover {
        cursor: pointer;
    }
`

export default function ItemConvidado({convidado, onChange}) {
    const [currentAnswer, setCurrentAnswer] = useState(convidado.answer);
    
    const changeGuestAnswer = (event) => {
        if(event.target.slot) {
            setCurrentAnswer(event.target.slot)
            onChange(event.target.slot, convidado.id)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CardEstilizado bordercolor={theme.palette.grey[300]}>
                <Grid2 container spacing={{ xs: 2, md: 3 }}>
                    <Grid2 size={{ xs: 4, sm: 7, md: 7 }}>
                        <TextoEstilizado>{convidado.name}</TextoEstilizado>
                        <TextoEstilizado color={"#908e8c"}>{convidado.ageGroup} - {convidado.gender}</TextoEstilizado>
                    </Grid2>
                    <Grid2 display={"flex"} alignItems={"center"} size={{ xs: 2, sm: 4, md: 4 }}>
                        <Tooltip title={"Pendente"}>
                            <StyledPriorityHighIcon currentanswer={currentAnswer} onClick={e => changeGuestAnswer(e)} slot={"pending"} defaultcolor={theme.palette.background.paper} color={theme.palette.warning.main}/>
                        </Tooltip>
                        <Tooltip title={"Confirmado"}>
                            <StyledCheckIcon currentanswer={currentAnswer} onClick={e => changeGuestAnswer(e)} slot={"confirmed"} defaultcolor={theme.palette.background.paper} color={theme.palette.success.main}/>
                        </Tooltip>
                        <Tooltip title={"Cancelado"}>
                            <StyledCloseIcon currentanswer={currentAnswer} onClick={e => changeGuestAnswer(e)} slot={"canceled"} defaultcolor={theme.palette.background.paper} color={theme.palette.error.main}/>
                        </Tooltip>
                    </Grid2>
                    <IconButton>
                        <MoreHorizIcon />
                    </IconButton>
                </Grid2>
            </CardEstilizado>
        </ThemeProvider>
    )
}
