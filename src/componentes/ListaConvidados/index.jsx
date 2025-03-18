import styled from "@emotion/styled/macro";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, TextField, Button, Tooltip, ThemeProvider } from "@mui/material";
import { Tipografia } from "../Tipografia";
import { Botao } from "../Botao";
import { ItemLista } from "./ItemLista";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ListaSuspensa from "../ListaSuspensa";
import ddiList from '../../assets/json/ddi.json';
import RadioOptions from "../RadioOptions"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import theme from '../../theme.ts';

const Container = styled.ul`
	background-color: ${props => props.backgroundColor};
	min-height: 50vh;
    min-width: 700px;
    padding: 30px 20px 20px 20px;
    border-radius: 5px;
`

const StyledLabel = styled.p`
    margin: 10px 0;
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
    background-color: #f0eaea;
    padding: 18px 20px;
    font-weight: 700;
    margin: 0;
`

const StyledDialogTitle = styled(DialogTitle)(() => ({
    padding: '10px',
}))

const StyledTextField = styled(TextField)(() => ({
    display: 'flex',
    margin: '0 0 20px 0',
    '& input': {
        height: '8px'
    }
}))

const StyledInfoButton = styled(InfoOutlinedIcon)`
    width: 16px;
    height: 16px;
    padding-left: 5px;
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
    const [currentInvitation, opencurrentInvitation] = useState({
        id: "",
        nome: "",
        telefone: "",
        guests: [],
        grupo: "",
        resposta: 0
    });
    const [invitation, setInvitation] = useState('');
    const [ddi, setDdi] = useState('55');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const [observations, setObservations] = useState('');
    const [newGuestName, setNewGuestName] = useState('');
    const [rsvp, setRsvp] = useState('pending');
    const [table, setTable] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');

    const tableList = [
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

    const groupList = [
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

    /** TODO 
     * adicionar guests em cada invitation
     * permitir clicar nos convites
     * permitir editar convites */
    let invitationsList = [
        {
            id: uuidv4(),
            nome: "Familia da Fulana",
            telefone: "(67)999185885",
            guests: [
                {
                    guestId: uuidv4(),
                    name: "Beltrano",
                    phone: "(67)999185885",
                    group: "Amigo",
                    response: 0
                },

            ],
            grupo: "Padrinho",
            resposta: 0
        },
        {
            id: uuidv4(),
            nome: "Beltrano",
            telefone: "(67)999185885",
            guests: [
                {
                    guestId: uuidv4(),
                    name: "Beltrano",
                    phone: "(67)999185885",
                    group: "Amigo",
                    response: 0
                },

            ],
            grupo: "Amigo",
            resposta: 0
        },
        {
            id: uuidv4(),
            nome: "Ciclano",
            telefone: "(67)999185885",
            guests: [
                {
                    guestId: uuidv4(),
                    name: "Beltrano",
                    phone: "(67)999185885",
                    group: "Amigo",
                    response: 0
                },

            ],
            grupo: null,
            resposta: 0
        }
    ];
    
    let guestsList = [
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

    const addInvitation = (event) => {
        event.preventDefault();
        console.log("addInvitation")
        let newInvitation = {
            id: uuidv4(),
            nome: newGuestName,
            telefone: phone,
            guests: [],
            grupo: group,
            resposta: rsvp
        }
        // closeInvitationsPopup()
    }

    //TODO arrumar a lista de convites e a lista de convidados
    const addGuestToInvitation = (event) => {
        event.preventDefault();
        console.log("addGuestToInvitation")
        currentInvitation.guests.push({
            id: uuidv4(),
            nome: newGuestName,
            telefone: phone,
            grupo: group,
            resposta: rsvp
        })
        // closeGuestPopup()
    }

    return(
        <ThemeProvider theme={theme}>
            <Tipografia variante="h1" componente="h1">Lista de Convidados</Tipografia>
            <Botao variant={"contained"} onClick={openInvitationsPopup}>Adicionar convite</Botao>
            <Container backgroundColor={theme.palette.grey[50]}>
                <Grid2 container spacing={0} sx={{marginBottom: 2}}>
                    <Grid2 size={{ xs: 2, sm: 4, md: 4 }} sx={{margin: '0 0 0 10px'}}>
                        <Tipografia variante="body" componente="bodyBold">Convite</Tipografia>
                    </Grid2>
                    <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
                        <Tipografia variante="body" componente="bodyBold">Grupo</Tipografia>
                    </Grid2>
                    <Grid2 size={{ xs: 2, sm: 3, md: 3 }}>
                        <Tipografia variante="body" componente="bodyBold">Respostas</Tipografia>
                    </Grid2>
                </Grid2>
                {invitationsList.map(convidado => <ItemLista 
                    key={convidado.id}
                    convidado={convidado}
                />)}
            </Container>

            <Dialog slotProps={{
            paper: {
                component: 'form',
                onSubmit: (event) => addInvitation(event),
            }
            }} sx={{
                '& .MuiPaper-root': {
                background: theme.palette.common.white
                }
            }} fullWidth open={openInvitations} onClose={closeInvitationsPopup} maxWidth="md">
                <StyledDialogTitle justifyContent={'center'}>
                    Adicionar convite
                    <IconButton style={{float:'right'}} onClick={closeInvitationsPopup}>
                        <CloseIcon sx={{ color: `grey[200]`}}/>
                    </IconButton>
                </StyledDialogTitle>
                <DialogSectionDivider>Dados do convite</DialogSectionDivider>
                <StyledDialogContent>
                    <StyledLabel sx={{padding: '10px'}}>Nome do convite*</StyledLabel>
                    <StyledTextField value={invitation} onChange={e => setInvitation(e.target.value)} id="outlined-basic" fullWidth variant="outlined" placeholder="Ex.: Familia da Julia"></StyledTextField>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                            <StyledLabel>DDI</StyledLabel>
                            <ListaSuspensa id={"DDI"} value={ddi} onChange={setDdi} itens={ddiList} isDDISelect={true}/>
                        </Grid2>
                        <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                            <StyledLabel>Celular com DDD: </StyledLabel>
                            <StyledTextField value={phone} onChange={e => setPhone(e.target.value)} variant="outlined" placeholder="(00) 999999999"></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>A qual grupo pertence: </StyledLabel>
                            <ListaSuspensa value={group} onChange={setGroup} id={"grupos"} itens={groupList}/>
                        </Grid2>
                    </Grid2>
                    <StyledLabel>Observações: </StyledLabel>
                    <StyledTextField value={observations} onChange={e => setObservations(e.target.value)} multiline rows={4} fullWidth></StyledTextField>
                </StyledDialogContent>
                <DialogSectionDivider>Convidados</DialogSectionDivider>
                {currentInvitation === null ?
                    <StyledNoGuestsText variante="body" componente="body">Nenhum convidado cadastrado. Informe os dados de pelo menos um convidado para este convite. </StyledNoGuestsText> 
                : 
                    <StyledDialogContent>
                        {currentInvitation.guests.map(convidado => <ItemLista 
                            key={convidado.id}
                            convidado={convidado}
                        />)}
                    </StyledDialogContent>
                }
                <StyledBotao variant={"contained"} onClick={openGuestPopup}>Adicionar convidados</StyledBotao>
                <DialogActions color="primary" sx={{padding: 0}}>
                    <Button type="submit" fullWidth color="primary" variant="contained">Salvar</Button>
                </DialogActions>
            </Dialog>


            <Dialog slotProps={{
            paper: {
                component: 'form',
                onSubmit: (event) => addGuestToInvitation(event),
            }
            }} sx={{
                '& .MuiPaper-root': {
                background: theme.palette.common.white
                }
            }} fullWidth open={openGuest} onClose={closeGuestPopup} maxWidth="md">
                <StyledDialogTitle justifyContent={'center'}>
                    Adicionar convidado
                    <IconButton style={{float:'right'}} onClick={closeGuestPopup}>
                        <CloseIcon sx={{ color: `grey[200]`}}/>
                    </IconButton>
                </StyledDialogTitle>
                <StyledDialogContent>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 9, sm: 9, md: 9 }}>
                            <StyledLabel>Nome do convidado*</StyledLabel>
                            <StyledTextField value={newGuestName} onChange={e => setNewGuestName(e.target.value)} id="outlined-basic" fullWidth variant="outlined" placeholder="Ex.: Julia"></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                            <StyledLabel style={{display: 'flex', alignItems: 'center'}}>
                                RSVP
                                <Tooltip title={"Status de Confirmação de presença"}>
                                    <StyledInfoButton color="primary"/>
                                </Tooltip>
                            </StyledLabel>
                            <RadioOptions value={rsvp} onChange={setRsvp} options={[{id: 1, value: <PriorityHighIcon/>, hint:'Pendente', color: theme.palette.warning.main},{id: 2, value: <CheckIcon/>, hint:'Confirmado', color: theme.palette.success.main},{id: 3, value: <CloseIcon/>, hint:'Não irá comparecer', color: theme.palette.error.main}]}/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Mesa: </StyledLabel>
                            <ListaSuspensa value={table} onChange={setTable} label="Digite ou selecione a mesa" itens={tableList}/>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Gênero:</StyledLabel>
                            <RadioOptions value={gender} onChange={setGender} options={[{id: 1, value: 'Masculino'},{id: 2, value: 'Feminino'},{id: 3, value: 'Não binário'}]}/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Faixa etária: </StyledLabel>
                            <StyledTextField value={age} onChange={e => setAge(e.target.value)} variant="outlined" label=""></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Pagamento/custo por convidado:</StyledLabel>
                            <RadioOptions value={paymentType} onChange={setPaymentType} options={[{id: 1, value: 'Inteira'},{id: 2, value: 'Meia'},{id: 3, value: 'Gratuita'}]}/>
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>RG: </StyledLabel>
                            <StyledTextField value={rg} onChange={e => setRg(e.target.value)} inputMode="numeric" variant="outlined" label=""></StyledTextField>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>CPF: </StyledLabel>
                            <StyledTextField value={cpf} onChange={e => setCpf(e.target.value)} inputMode="numeric" variant="outlined" label=""></StyledTextField>
                        </Grid2>
                    </Grid2>
                </StyledDialogContent>
                <DialogActions sx={{padding: 0}}>
                    <Button fullWidth type="submit" color="primary" variant="contained">Salvar</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}