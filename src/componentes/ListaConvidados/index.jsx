import styled from "@emotion/styled/macro"
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, TextField, Button, Tooltip } from "@mui/material"
import { Tipografia } from "../Tipografia"
import { Botao } from "../Botao"
import { ItemLista } from "./ItemLista"
import { v4 as uuidv4 } from "uuid";
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ListaSuspensa from "../ListaSuspensa"

const Container = styled.ul`
	background-color: #e0e0e0;
	min-height: 50vh;
    padding: 30px 20px 20px 20px;
    border-radius: 5px;
`

const StyledLabel = styled.p`
    margin: 0 0 10px 0;
`

const StyledDialogContent = styled(DialogContent)(() => ({
    padding: '0 20px'
}))

const StyledBotao = styled(Botao)`
    text-align: center;
    align-self: center;
    margin: 20px 20px 40px 20px;
`

const DialogSectionDivider = styled.p`
    background-color: #DDDDDD;
    padding: 18px 20px;
    font-weight: 700;
    margin: 0;
`

const StyledDialogTitle = styled(DialogTitle)(() => ({
    padding: '10px',
}))

const StyledTextField = styled(TextField)(({props}) => ({
    display: 'flex',
    margin: '0 0 20px 0',
}))

const StyledInfoButton = styled(InfoOutlinedIcon)`
    width: 16px;
    height: 16px;
    padding-left: 5px;
    color: blue;
`

const StyledPriorityHighIcon = styled(Botao)`
    width: 10px;
    height: 40px;
    background-color: gray;
`

const StyledNoGuestsText = styled.p`
    width: 450px;
    font-size: 16px;
    text-align: center;
    align-self: center;
`

export default function ListaConvidados() {
    const [openInvitations, openInvitationsChange] = useState(false);
    const [openGuest, openGuestChange] = useState(false);

    const listaMesas = [
        {
            value: 'Mesa A', label: 'Mesa A'
        },
        {
            value: 'Mesa B', label: 'Mesa B'
        },
        {
            value: 'Mesa C', label: 'Mesa C'
        },
    ]

    const listaGrupos = [
        {
            value: 'Amigos', label: 'Amigos'
        },
        {
            value: 'Amigos da Noiva', label: 'Amigos da Noiva'
        },
        {
            value: 'Amigos do Noivo', label: 'Amigos do Noivo'
        },
        {
            value: 'Família da Noiva', label: 'Família da Noiva'
        },
        {
            value: 'Família do Noivo', label: 'Família do Noivo'
        },
    ]
    
    let listaConvidados = [
        {
            id: uuidv4(),
            nome: "Fulano",
            telefone: "(67)999185885",
            grupo: "Padrinho",
            resposta: 0
        },
        {
            id: uuidv4(),
            nome: "Beltrano",
            telefone: "(67)999185885",
            grupo: "Amigo",
            resposta: 0
        },
        {
            id: uuidv4(),
            nome: "Ciclano",
            telefone: "(67)999185885",
            grupo: null,
            resposta: 0
        }
    ];

    const openInvitationsPopup = () => {
        openInvitationsChange(true);
    }

    const closeInvitationsPopup = () => {
        openInvitationsChange(false);
    }

    const openGuestPopup = () => {
        openGuestChange(true);
    }

    const closeGuestPopup = () => {
        openGuestChange(false);
    }

    return(
        <>
            <Tipografia variante="h1" componente="h1">Lista de Convidados</Tipografia>
            <Botao variant={"contained"} onClick={openInvitationsPopup}>Adicionar convite</Botao>
            <Container>
                <Grid2 container spacing={0} sx={{marginBottom: 2}}>
                    <Grid2 size={{ xs: 2, sm: 4, md: 4 }} sx={{margin: '0 0 0 10px'}}>
                        <Tipografia variante="body" componente="bodyBold">Convite</Tipografia>
                    </Grid2>
                    <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                        <Tipografia variante="body" componente="bodyBold">Grupo</Tipografia>
                    </Grid2>
                    <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
                        <Tipografia variante="body" componente="bodyBold">Resposta</Tipografia>
                    </Grid2>
                </Grid2>
                {listaConvidados.map(convidado => <ItemLista 
                    key={convidado.id}
                    convidado={convidado}
                />)}
            </Container>


            <Dialog fullWidth open={openInvitations} onClose={closeInvitationsPopup} maxWidth="md">
                <StyledDialogTitle justifyContent={'center'}>
                    Adicionar convite
                    <IconButton style={{float:'right'}} onClick={closeInvitationsPopup}>
                        <CloseIcon color="primary"/>
                    </IconButton>
                </StyledDialogTitle>
                <DialogSectionDivider>Dados do convite</DialogSectionDivider>
                <StyledDialogContent>
                    <Tipografia variante={"body"} componente={"body"}>Nome do convite*</Tipografia>
                    <StyledTextField id="outlined-basic" fullWidth variant="outlined" label="Ex.: Familia da Julia"></StyledTextField>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                            {/*TODO listaSuspença com DDI*/}
                            <StyledLabel>DDI</StyledLabel>
                            <ListaSuspensa isDDISelect={true}/>
                            {/* <StyledTextField variant="outlined" value="+55"></StyledTextField> */}
                        </Grid2>
                        <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                            <StyledLabel>Celular com DDD: </StyledLabel>
                            <StyledTextField variant="outlined" label="(00) 999999999"></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>A qual grupo pertence: </StyledLabel>
                            <ListaSuspensa itens={listaGrupos}/>
                        </Grid2>
                    </Grid2>
                    <StyledLabel>Observações: </StyledLabel>
                    <StyledTextField multiline rows={4} fullWidth></StyledTextField>
                </StyledDialogContent>
                <DialogSectionDivider>Convidados</DialogSectionDivider>
                {listaConvidados.size !== 0 ?    //mudar pra == 0 quando já tiver os componentes e listas corretas
                    <StyledNoGuestsText variante="body" componente="body">Nenhum convidado cadastrado. Informe os dados de pelo menos um convidado para este convite. </StyledNoGuestsText> 
                : 
                    <StyledDialogContent>
                        a
                    </StyledDialogContent>
                }
                <StyledBotao variant={"contained"} onClick={openGuestPopup}>Adicionar convidados</StyledBotao>
                <DialogActions sx={{padding: 0}}>
                    <Button fullWidth color="success" variant="contained">Salvar</Button>
                </DialogActions>
            </Dialog>


            <Dialog fullWidth open={openGuest} onClose={closeGuestPopup} maxWidth="md">
                <StyledDialogTitle justifyContent={'center'}>
                    Adicionar convidado
                    <IconButton style={{float:'right'}} onClick={closeGuestPopup}>
                        <CloseIcon color="primary"/>
                    </IconButton>
                </StyledDialogTitle>
                <StyledDialogContent>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 10, sm: 10, md: 10 }}>
                            <StyledLabel>Nome do convidado*</StyledLabel>
                            <StyledTextField id="outlined-basic" fullWidth variant="outlined" label="Ex.: Julia"></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <StyledLabel style={{display: 'inline'}}>RSVP</StyledLabel>
                            <Tooltip title={"Status de Confirmação de presença"}>
                                <StyledInfoButton style={{marginLeft:'2px'}}/>
                            </Tooltip>
                            <StyledPriorityHighIcon>
                                <PriorityHighIcon/>
                            </StyledPriorityHighIcon>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            {/*TODO listaSuspença com Mesas existentes*/}
                            <StyledLabel>Mesa: </StyledLabel>
                            <ListaSuspensa label="Digite ou selecione a mesa" itens={listaMesas}/>
                        </Grid2>
                        {/*TODO componente de checkbox para seleção de Gênero e Pagamento*/}
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <StyledLabel>Gênero:</StyledLabel>
                            <Tipografia variante={"body"} componente={"body"}>Masculino</Tipografia>
                        </Grid2>
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <Tipografia variante={"body"} componente={"body"}>Feminino</Tipografia>
                        </Grid2>
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <Tipografia variante={"body"} componente={"body"}>Não binário</Tipografia>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            {/*TODO listaSuspença com Mesas existentes*/}
                            <StyledLabel>Faixa etária: </StyledLabel>
                            <StyledTextField variant="outlined" label=""></StyledTextField>
                        </Grid2>
                        {/*TODO componente de checkbox para seleção de Gênero e Pagamento*/}
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <StyledLabel>Pagamento/custo por convidado:</StyledLabel>
                            <Tipografia variante={"body"} componente={"body"}>Inteira</Tipografia>
                        </Grid2>
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <Tipografia variante={"body"} componente={"body"}>Meia</Tipografia>
                        </Grid2>
                        <Grid2 size={{ xs: 2, sm: 2, md: 2 }}>
                            <Tipografia variante={"body"} componente={"body"}>Gratuita</Tipografia>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>RG: </StyledLabel>
                            <StyledTextField inputMode="numeric" variant="outlined" label=""></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>CPF: </StyledLabel>
                            <StyledTextField inputMode="numeric" variant="outlined" label=""></StyledTextField>
                        </Grid2>
                    </Grid2>
                </StyledDialogContent>
                <DialogActions sx={{padding: 0}}>
                    <Button fullWidth color="success" variant="contained">Salvar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}