import styled from "@emotion/styled/macro";
import { Dialog, DialogActions, DialogContent, DialogTitle, Grid2, IconButton, TextField, Button, Tooltip, ThemeProvider, Divider, Tabs, Tab } from "@mui/material";
import { ItemConvite } from "./ItemConvite/index.jsx";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import ItemConvidado from "./ItemConvidado/index.jsx";
import QRCode from 'qrcode';
import { Controller, useForm } from "react-hook-form";
import { Botao } from "../../componentes/Botao/index.jsx";
import { useConvidadoContext } from "../../contexto/ConvidadoContext.jsx";
import theme from "../../theme.ts";
import { Tipografia } from "../../componentes/Tipografia/index.jsx";
import TabPanel from "../../componentes/TabPanel/index.jsx";
import ddiList from "../../assets/json/ddi.json"
import ListaSuspensa from "../../componentes/ListaSuspensa/index.jsx";
import SendMessageDialog from "../../componentes/SendMessageDialog/index.jsx";
import CustomAlertDialog from "../../componentes/CustomAlertDialog/index.jsx";
import RadioOptions from "../../componentes/RadioOptions/index.jsx";

const Container = styled.ul`
	background-color: ${props => props.backgroundcolor};
	min-height: 50vh;
    min-width: 700px;
    padding: 30px 20px 20px 20px;
    border-radius: 5px;
`
const StyledLabel = styled.p`
    margin: 10px 0;
`
const StyledDialogContent = styled(DialogContent)`
    padding: 0 20px;
`
const StyledBotao = styled(Botao)`
    text-align: center;
    align-self: center;
    margin: 20px 20px 20px 20px;
    :hover {
        color: white;
    }
`
const DialogSectionDivider = styled.p`
    background-color: #f0eaea;
    padding: 18px 20px;
    font-weight: 700;
    margin: 0;
`
const StyledDialogTitle = styled(DialogTitle)`
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
`
const StyledTextField = styled(TextField)`
    display: flex;
    margin: 0 0 10px 0;
    & input {
        height: 6px;
    }
`
const StyledQrCode = styled.img`
    display: flex;
    width: 300px;
`
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
const StyledTabs = styled(Tabs)`
    padding: 0 20px;
`
const StyledTab = styled(Tab)`
    padding: 0;
    font-weight: 400;
`
const StyledErrorMessage = styled.span`
    font-weight: 400;
    font-size: 12px;
    position: absolute;
    color: ${props => props.color};
`

export default function ListaConvidados() {
    const [openInvitations, openInvitationsChange] = useState(false);
    const [openGuest, openGuestChange] = useState(false);
    const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
    const [inviteEditMode, setInviteEditMode] = useState(false);
    const [guestEditMode, setGuestEditMode] = useState(false);
    const [isDirectlyAddingGuestToInvite, setIsDirectlyAddingGuestToInvite] = useState(false);
    const [invitationGuestsList, setInvitationGuestsList] = useState([]);
    const [invitationId, setInvitationId] = useState('');
    const [invitationName, setInvitationName] = useState('');
    const [ddi, setDdi] = useState('55');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const [observations, setObservations] = useState('');
    const [newGuestId, setNewGuestId] = useState('');
    const [newGuestName, setNewGuestName] = useState('');
    const [rsvp, setRsvp] = useState('pending');
    const [table, setTable] = useState('');
    const [gender, setGender] = useState('');
    const [ageGroup, setAgeGroup] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [openMessageDialog, setOpenMessageDialog] = useState(false);
    const [inviteTabValue, setInviteTabValue] = useState(0);
    const [qrcode, setQrcode] = useState('');
    const {register, handleSubmit, control, formState: {errors}} = useForm()
    const {
        invitations,
        setInvitations,
        updateInvitation,
        removeInvitation,
    } = useConvidadoContext();

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
    const ageGroupList = [
        {
            value: 'Adulto', label: 'Adulto'
        },
        {
            value: 'Adolescente', label: 'Adolescente'
        },
        {
            value: 'Criança', label: 'Criança'
        },
        {
            value: 'Criança de colo', label: 'Criança de colo'
        },
        {
            value: 'Idoso', label: 'Idoso'
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
   
    const openInvitationsPopup = (inviteId = null) => {
        if(inviteId != null) {
            setInviteEditMode(true)
            fillInviteDialogFields(invitations.find(invitation => invitation.id === inviteId))
        }
        openInvitationsChange(true);
    }

    const closeInvitationsPopup = () => {
        openInvitationsChange(false);
        clearDialogFields();
        cleanGuestDialogFields();
        setInvitationGuestsList([]);
        setInviteEditMode(false);
    }

    const openGuestPopup = (guestId = null) => {
        if(guestId != null) {
            setGuestEditMode(true)
            fillGuestDialogFields(invitationGuestsList.find(guest => guest.id === guestId))
        }
        openGuestChange(true);
    }

    const closeGuestPopup = () => {
        cleanGuestDialogFields();
        openGuestChange(false);
        setGuestEditMode(false);
    }

    const fillInviteDialogFields = (invite) => {
        setInvitationId(invite.id)
        setInvitationGuestsList(invite.guests)
        setInvitationName(invite.name)
        setDdi(invite.ddi)
        setPhone(invite.phone)
        setGroup(invite.group)
        setObservations(invite.observations)
        generateInviteQrCode(invite.qrCode)
    }

    const fillGuestDialogFields = (guest) => {
        setNewGuestId(guest.id)
        setNewGuestName(guest.name)
        setRsvp(guest.answer)
        setTable(guest.table)
        setGender(guest.gender)
        setAgeGroup(guest.ageGroup)
        setPaymentType(guest.pagamento)
        setRg(guest.rg)
        setCpf(guest.cpf)
    }

    const addInvitation = (isConfirmationDialog) => {
        // event.preventDefault();
        
        if(invitationGuestsList.length === 0 && !isConfirmationDialog) {
            setOpenConfirmationDialog(true)
        } else {
            var newQrCode = invitationName.toLocaleLowerCase().slice(invitationName.length-4)+phone.slice(phone.length-4)
            if(inviteEditMode) {
                var inviteToUpdate = invitations.find(invitation => invitation.id === invitationId)
                inviteToUpdate = {
                    id: invitationId,
                    name: invitationName,
                    ddi: ddi,
                    phone: phone,
                    group: group,
                    observations: observations,
                    qrCode: newQrCode,
                    guests: invitationGuestsList
                }
                updateInvitation(inviteToUpdate);
            } else {
                var newInvitation = {
                    id: uuidv4(),
                    name: invitationName,
                    ddi: ddi,
                    phone: phone,
                    group: group,
                    observations: observations,
                    qrCode: newQrCode,
                    guests: invitationGuestsList
                }
                setInvitations(previousState => [...previousState, newInvitation])
            }
            closeInvitationsPopup();
        }
    }

    const clearDialogFields = () => {
        setInvitationId('')
        setInvitationName('')
        setDdi('55')
        setPhone('')
        setGroup('')
        setObservations('')
    }

    const addGuestToInvite = (event) => {
        event.preventDefault();

        if(isDirectlyAddingGuestToInvite) {
            let newGuest = {
                id: uuidv4(),
                name: newGuestName,
                answer: rsvp,
                table: table,
                gender: gender,
                ageGroup: ageGroup,
                pagamento: paymentType,
                rg: rg,
                cpf: cpf
            }
            var newInvitationGuestsList = [...invitationGuestsList, newGuest];
            var newQrCode = invitationName.toLocaleLowerCase().slice(invitationName.length-4)+phone.slice(phone.length-4)
            var inviteToUpdate = invitations.find(invitation => invitation.id === invitationId)
            inviteToUpdate = {
                id: invitationId,
                name: invitationName,
                ddi: ddi,
                phone: phone,
                group: group,
                observations: observations,
                qrCode: newQrCode,
                guests: newInvitationGuestsList
            }
            updateInvitation(inviteToUpdate);
            setIsDirectlyAddingGuestToInvite(false);
        } else {
            if(guestEditMode) {
                let guestToUpdate = invitationGuestsList.findIndex(guest => guest.id === newGuestId)
                invitationGuestsList[guestToUpdate] = {
                    id: newGuestId,
                    name: newGuestName,
                    answer: rsvp,
                    table: table,
                    gender: gender,
                    ageGroup: ageGroup,
                    pagamento: paymentType,
                    rg: rg,
                    cpf: cpf
                }
                setInvitationGuestsList([...invitationGuestsList])
            } else {
                console.log('new guest')
                let newGuest = {
                    id: uuidv4(),
                    name: newGuestName,
                    answer: rsvp,
                    table: table,
                    gender: gender,
                    ageGroup: ageGroup,
                    pagamento: paymentType,
                    rg: rg,
                    cpf: cpf
                }
                setInvitationGuestsList([...invitationGuestsList, newGuest]);
            }
        }
        
        closeGuestPopup();
    }

    const cleanGuestDialogFields = () => {
        setNewGuestId('')
        setNewGuestName('')
        setRsvp('')
        setTable('')
        setGender('')
        setAgeGroup('')
        setPaymentType('')
        setRg('')
        setCpf('')
    }

    const changeGuestAnswer = (answer, guestId) => {
        let newInvitationGuestsList = [...invitationGuestsList]
        let guestToUpdate = newInvitationGuestsList.findIndex(guest => guest.id === guestId)
        newInvitationGuestsList[guestToUpdate].answer = answer
        setInvitationGuestsList([...newInvitationGuestsList])
    }

    const removeGuestFromInvite = (guestId) => {
        let newinvitationGuestsList = invitationGuestsList.filter(guest => guest.id !== guestId)
        setInvitationGuestsList([...newinvitationGuestsList])
    }

    function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const handleQRCodeDownload = () => {
        QRCode.toDataURL(invitationId, (err, url) => {
            if(err) return console.error(err);

            let qrCodeURL = url.replace("image/png", "image/octet-stream");
            let element = document.createElement("a");
            element.href = qrCodeURL;
            element.download = `QR_CODE_${invitationName}.png`;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        });
    }

    const changeInviteDialogTab = (event, newValue) => {
        setInviteTabValue(newValue);
    };

    const generateInviteQrCode = (qrCode) => {
        QRCode.toDataURL(qrCode, (err, url) => {
            if(err) return console.error(err)
            
            setQrcode(url)
        })
    }

    const directlyAddGuestToInvite = (inviteId) => {
        console.log(inviteId);
        var invite = invitations.find(invitation => invitation.id === inviteId)
        setIsDirectlyAddingGuestToInvite(true);
        fillInviteDialogFields(invite);
        openGuestPopup();
    }

    const onSubmit = (_) => {
        addInvitation(false);
    }

    return(
        <ThemeProvider theme={theme}>
            <Tipografia variante="h1" componente="h1">Lista de Convidados</Tipografia>
            <Botao variant={"contained"} onClick={() => openInvitationsPopup()}>Adicionar convite</Botao>
            <Container backgroundcolor={theme.palette.grey[50]}>
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
                <Divider />
                {invitations.map(convite => <ItemConvite
                    key={convite.id}
                    convite={convite}
                    onClick={(inviteId) => openInvitationsPopup(inviteId)}
                    onDeleteInvite={(event, inviteId) => removeInvitation(event, inviteId)}
                    onAddGuest={(inviteId) => directlyAddGuestToInvite(inviteId)}
                />)}
            </Container>

            {/**********Dialog do Convite **********/}
            {openInvitations && 
            <Dialog slotProps={{
            paper: {
                component: 'form',
                onSubmit: handleSubmit(onSubmit)
                // onSubmit: (event) => addInvitation(event, false),
            }
            }} sx={{
                minWidth: '800px',
                '& .MuiPaper-root': {
                    background: theme.palette.common.white
                }
            }} fullWidth open={openInvitations} onClose={closeInvitationsPopup} maxWidth="md">
                <StyledDialogTitle>
                    Adicionar convite
                    <IconButton style={{float:'right'}} onClick={closeInvitationsPopup}>
                        <CloseIcon sx={{ color: `grey[200]`}}/>
                    </IconButton>
                </StyledDialogTitle>
                {inviteEditMode && <Divider/>}
                {inviteEditMode && <StyledTabs value={inviteTabValue} onChange={changeInviteDialogTab}>
                    <StyledTab label="Dados do convite" {...a11yProps(0)} />
                    <StyledTab style={{margin: '0 10px'}} label="QR Code" {...a11yProps(1)} />
                </StyledTabs>}
                <TabPanel value={inviteTabValue} index={0}>
                    <DialogSectionDivider>Dados do convite</DialogSectionDivider>
                    <StyledDialogContent>
                        <StyledLabel sx={{padding: '10px'}}>Nome do convite*</StyledLabel>
                        <StyledTextField value={invitationName} {...register("invitationName", {required: true})} onChange={e => setInvitationName(e.target.value)} id="outlined-basic" fullWidth variant="outlined" placeholder="Ex.: Familia da Julia"></StyledTextField>
                        {errors.invitationName && <StyledErrorMessage style={{translate: '0px -10px'}} color={theme.palette.error.main} variante={"legenda"} componente={"legenda"}>Campo obrigatório</StyledErrorMessage>}
                        <Grid2 container spacing={2}>
                            <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                                <StyledLabel>DDI</StyledLabel>
                                <Controller
                                    name="ddi"
                                    control={control}
                                    defaultValue={ddi}
                                    rules={{ required: true }}
                                    render={({field}) => <ListaSuspensa {...field} id={"DDI"} value={ddi} onChange={(value) => {
                                        field.onChange(value)
                                        setDdi(value)
                                    }} itens={ddiList} isDDISelect={true}/>}
                                />
                                {errors.ddi && <StyledErrorMessage color={theme.palette.error.main} variante={"legenda"} componente={"legenda"}>Campo obrigatório</StyledErrorMessage>}
                            </Grid2>
                            <Grid2 size={{ xs: 3, sm: 3, md: 3 }}>
                                <StyledLabel>Celular com DDD: </StyledLabel>
                                <StyledTextField value={phone} type="tel" inputMode="numeric" {...register("phone", {required: true, pattern:"[0-9]*"})} onChange={e => setPhone(e.target.value)} variant="outlined" placeholder="(00) 999999999"></StyledTextField>
                                {errors.phone && <StyledErrorMessage style={{translate: '0px -10px'}} color={theme.palette.error.main} variante={"legenda"} componente={"legenda"}>Campo obrigatório</StyledErrorMessage>}
                            </Grid2>
                            <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                                <StyledLabel>A qual grupo pertence: </StyledLabel>
                                <Controller
                                    name="group"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({field}) => <ListaSuspensa {...field} value={group} onChange={(value) => {
                                        field.onChange(value)
                                        setGroup(value)
                                    }} id={"grupos"} itens={groupList}/>}
                                />
                                {errors.group && <StyledErrorMessage color={theme.palette.error.main} variante={"legenda"} componente={"legenda"}>Campo obrigatório</StyledErrorMessage>}
                            </Grid2>
                        </Grid2>
                        <StyledLabel>Observações: </StyledLabel>
                        <StyledTextField style={{margin: '0 0 15px 0'}} value={observations} onChange={e => setObservations(e.target.value)} multiline rows={4} fullWidth></StyledTextField>
                    </StyledDialogContent>
                    <DialogSectionDivider>Convidados</DialogSectionDivider>
                    {invitationGuestsList.length === 0 ?
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                            }}>
                            <StyledNoGuestsText variante="body" componente="body">Nenhum convidado cadastrado. Informe os dados de pelo menos um convidado para este convite. </StyledNoGuestsText> 
                        </div>
                        :
                        <StyledDialogContent>
                            {invitationGuestsList.map(guest => <ItemConvidado
                                key={guest.id}
                                convidado={guest}
                                onClick={(guestId) => openGuestPopup(guestId)}
                                onDelete={(guestId) => removeGuestFromInvite(guestId)}
                                onChange={(answer, guestId) => changeGuestAnswer(answer, guestId)}
                                />)}
                        </StyledDialogContent>
                    }
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                        }}>
                        <StyledBotao variant={"contained"} onClick={() => openGuestPopup()}>Adicionar convidados</StyledBotao>
                    </div>
                </TabPanel>
                <TabPanel value={inviteTabValue} index={1}>
                    <StyledDialogContent>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                            }}>
                            <StyledLabel variante="body" componente="body">QR Code do convite para apresentar na recepção do evento.</StyledLabel> 
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                            }}>
                            <StyledQrCode id={qrcode} src={qrcode} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center'
                            }}>
                            <StyledBotao onClick={handleQRCodeDownload} variant={"outlined"}>Baixar QR Code</StyledBotao>
                            <StyledBotao variant={"outlined"} onClick={() => setOpenMessageDialog(true)}>Enviar para WhatsApp</StyledBotao>
                        </div>
                    </StyledDialogContent>
                </TabPanel>
                <DialogActions color="primary" sx={{padding: 0}}>
                    <Button type="submit" fullWidth sx={{height: 50}} color="primary" variant="contained">Salvar</Button>
                </DialogActions>
            </Dialog>}

            {openMessageDialog && 
                <SendMessageDialog inviteName={invitationName} ddi={ddi} phone={phone} open={openMessageDialog} setOpen={setOpenMessageDialog}/>
            }
            {openConfirmationDialog 
                && <CustomAlertDialog 
                    open={openConfirmationDialog}
                    title={"Convite sem convidados"}
                    message={`Você não adicionou nenhum convidado nesse convite, deseja salvar sem convidados?`}
                    confirmButtonText={"Salvar sem convidados"}
                    cancelButtonText={"Adicionar convidados"}
                    onConfirm={(event) => addInvitation(event, true)} 
                    onCancel={() => openGuestPopup()} 
                    setOpen={(isOpen) => setOpenConfirmationDialog(isOpen)}
                />
            }
            

            {/**********Dialog do Convidado **********/}
            {openGuest && 
            <Dialog slotProps={{
            paper: {
                component: 'form',
                onSubmit: (event) => addGuestToInvite(event),
            }
            }} sx={{
                minWidth: '800px',
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
                <Divider/>
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
                            <RadioOptions value={rsvp}
                                onClick={setRsvp}
                                options={[
                                    {id: 1, value: "pending", label: <PriorityHighIcon/>, hint:'Pendente', color: theme.palette.warning.main},
                                    {id: 2, value: "confirmed", label: <CheckIcon/>, hint:'Confirmado', color: theme.palette.success.main},
                                    {id: 3, value: "canceled", label: <CloseIcon/>, hint:'Cancelado', color: theme.palette.error.main}
                                ]}
                            />
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Mesa: </StyledLabel>
                            <ListaSuspensa value={table} onChange={setTable} label="Digite ou selecione a mesa" itens={tableList}/>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Gênero:</StyledLabel>
                            <RadioOptions value={gender} 
                                onClick={setGender} 
                                options={[
                                    {id: 1, value: 'Masculino', label: 'Masculino'},
                                    {id: 2, value: 'Feminino', label: 'Feminino'},
                                    {id: 3, value: 'Não binário', label: 'Não binário'}
                                ]}
                            />
                        </Grid2>
                    </Grid2>
                    <Grid2 container spacing={2}>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Faixa etária: </StyledLabel>
                            <ListaSuspensa value={ageGroup} onChange={setAgeGroup} itens={ageGroupList}/>
                        </Grid2>
                        <Grid2 size={{ xs: 6, sm: 6, md: 6 }}>
                            <StyledLabel>Pagamento/custo por convidado:</StyledLabel>
                            <RadioOptions value={paymentType} 
                                onClick={setPaymentType} 
                                options={[
                                    {id: 1, value: 'Inteira', label: 'Inteira'},
                                    {id: 2, value: 'Meia', label: 'Meia'},
                                    {id: 3, value: 'Gratuita', label: 'Gratuita'}
                                ]}
                            />
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
            </Dialog>}
        </ThemeProvider>
    );
}