import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, Tab, Tabs, TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react'
import theme from '../../theme.ts';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styled from '@emotion/styled/macro';
import { Tipografia } from '../Tipografia/index.jsx';
import { Botao } from '../Botao/index.jsx';

const StyledDialogTitle = styled(DialogTitle)`
    display: flex;
    padding: 10px 10px 0 10px;
    align-items: center;
    justify-content: start;
    margin-left: 10px;
`
const StyledTabs = styled(Tabs)`
    padding: 0 20px;
`
const StyledTab = styled(Tab)`
	&.Mui-disabled {
		color: ${props => props.backgroundcolor};
	}
    padding: 0;
	margin: 0;
    font-weight: 400;
`
const StyledDialogContent = styled(DialogContent)`
    padding: 0 20px;
`
const StyledInputContainer = styled.div`
	display: flex;
`
const StyledLabel = styled.div`
	display: block;
    margin: 10px 0;
`
const StyledTextField = styled(TextField)`
    display: flex;
    margin: 10px 0 10px 0;
    & input {
        height: 6px;
    }
`
const StyledBotao = styled(Botao)`
	border-radius: 10px;
`
const StyledDialogActions = styled(DialogActions)`
	padding: 10px 20px 20px 0;
`
const StyledErrorMessage = styled.div`
    font-size: 0.75em;
    color: ${props => props.backgroundcolor};
    width: 90%;
    padding: 0;
    text-align: center;
    margin: 0;
`


export default function SendMessageDialog({inviteName, ddi, phone, open, setOpen}) {
    // const CHARACTER_LIMIT = 100;

    const [numberEmptyError, setNumberEmptyError] = useState(false);
    const [messageEmptyError, setMessageEmptyError] = useState(false);
    const [message, setMessage] = useState(`${inviteName}\n\nSegue o link para visualizar QR Code do evento Casamento de Fulano e Beltrana\n\n Apresente-o na recepção do evento.\n\n<Link do QR Code>`);
    const [mobileNumber, setMobileNumber] = useState(phone);
    const [phoneDdi, setPhoneDDI] = useState(ddi);

    const handleClose = () => {
		setOpen(false);
	};
  
	const onSubmit = (e) => {
		e.preventDefault();
		if (mobileNumber.length < 1) {
			setNumberEmptyError(true);
			setTimeout(() => setNumberEmptyError(false), 3000);
		} else if (message.length < 1) {
			console.log("ue")
			setMessageEmptyError(true);
			setTimeout(() => setMessageEmptyError(false), 3000);
		} else {
			// Regex expression to remove all characters which are NOT alphanumeric 
			let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

			// Appending the phone number and the message to the URL
			let url = `https://web.whatsapp.com/send?phone=${number}`;
			url += `&text=${encodeURI(message)}&app_absent=0`;

			// Open created URL in a new tab to send the message
			window.open(url);
		}
	};
  
    return (
		<ThemeProvider theme={theme}>
			<Dialog
				slotProps={{
					paper: {
						component: 'form',
						onSubmit: (event) => onSubmit(event),
					}
				}}
				open={open}
				onClose={handleClose}
				sx={{
					minWidth: '600px',
					padding: '20px',
					'& .MuiPaper-root': {
						background: theme.palette.common.white
					}
				}}
				maxWidth={"md"}
			>
				<StyledDialogTitle>
					Enviar via
					<StyledTabs value={0}>
						<StyledTab disabled backgroundcolor={theme.palette.primary.main} icon={<WhatsAppIcon />}></StyledTab>
					</StyledTabs>
				</StyledDialogTitle>
				<Divider sx={{margin: '0 20px'}}/>
				<StyledDialogContent>
					<Tipografia variante={"h3"} componente={"h1"}>Enviar por WhatsApp</Tipografia>
					<StyledInputContainer>
						<StyledLabel style={{width: '20%'}}>
							DDI
							<StyledTextField id="outlined-basic" value={"+"+phoneDdi} onChange={(event) => setPhoneDDI(event.target.value)} variant="outlined" placeholder="Ex.: +55"></StyledTextField>
						</StyledLabel>
						<StyledLabel style={{width: '100%'}}>
							Celular com DDD
							<StyledTextField id="outlined-basic" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)} fullWidth variant="outlined" placeholder="Ex.: 67 9999-9999"></StyledTextField>
							{/**TODO ajustar as mensagens de erro */}
							{numberEmptyError && (
								<StyledErrorMessage backgroundcolor={theme.palette.error.main}>Insira um número para enviar a mensagem</StyledErrorMessage>
							)}
						</StyledLabel>
					</StyledInputContainer>
					<StyledLabel>Mensagem</StyledLabel>
					<StyledTextField value={message} onChange={(event) => setMessage(event.target.value)} multiline rows={8} sx={{margin: '100px', width: '500px'}} id="outlined-basic" fullWidth variant="outlined" placeholder="Escreva uma mensagem para enviar para o convidado"></StyledTextField>
					{messageEmptyError && (
						<StyledErrorMessage backgroundcolor={theme.palette.error.main}>A mensagem não pode estar vazia</StyledErrorMessage>
					)}
				</StyledDialogContent>
				<StyledDialogActions>
					<StyledBotao variant={"outlined"} onClick={handleClose}>Cancelar</StyledBotao>
					<StyledBotao type="submit" variant={"contained"} autoFocus>Enviar</StyledBotao>
				</StyledDialogActions>
			</Dialog>
		</ThemeProvider>
    );
}