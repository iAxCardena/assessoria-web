import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Tab, Tabs, TextField, ThemeProvider, Typography } from '@mui/material';
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


export default function SendMessageDialog({inviteName, ddi, phone, open, setOpen}) {
    const CHARACTER_LIMIT = 100;

    const [numberEmptyError, setNumberEmptyError] = useState(false);
    const [messageEmptyError, setMessageEmptyError] = useState(false);
    const formMessage = inviteName+`\n\nSegue o link para visualizar QR Code do evento Casamento de Fulano & Beltrana\n\n Apresente-o na recepção do evento.\n\n<Link do QR Code>`;
    const [formData, setFormData] = useState({
      mobileNumber: phone,
      message: formMessage,
    });
    
    const { mobileNumber, message } = formData;

    const handleClose = () => {
        setOpen(false);
      };
  
    const onChange = (e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmit = (e) => {
      e.preventDefault();
      if (mobileNumber.length < 1) {
        setNumberEmptyError(true);
        setTimeout(() => setNumberEmptyError(false), 3000);
      } else if (message.length < 1) {
        setMessageEmptyError(true);
        setTimeout(() => setMessageEmptyError(false), 3000);
      } else {
     
        // TODO: Enter code here
      }
    };
  
    return (
		<ThemeProvider theme={theme}>
			<Dialog
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
							<StyledTextField id="outlined-basic" value={"+"+ddi} variant="outlined" placeholder="Ex.: Familia da Julia"></StyledTextField>
						</StyledLabel>
						<StyledLabel style={{width: '100%'}}>
							Celular com DDD
							<StyledTextField id="outlined-basic" fullWidth variant="outlined" placeholder="Ex.: Familia da Julia"></StyledTextField>
						</StyledLabel>
					</StyledInputContainer>
					<StyledLabel>Mensagem</StyledLabel>
					<StyledTextField value={formMessage} multiline rows={8} sx={{margin: '100px', width: '500px'}} id="outlined-basic" fullWidth variant="outlined" placeholder="Escreva uma mensagem para enviar para o convidado"></StyledTextField>

				</StyledDialogContent>
				<StyledDialogActions>
					<StyledBotao variant={"outlined"} onClick={handleClose}>Cancelar</StyledBotao>
					<StyledBotao variant={"contained"} autoFocus>Enviar</StyledBotao>
				</StyledDialogActions>
			</Dialog>
		</ThemeProvider>
    );
}

{/* <div className='title flex_middle'>
            <div style={{ marginRight: "0.5em" }}>
              <WhatsAppIcon />
            </div>
            <div>Send Message</div>
          </div>
          {numberEmptyError && (
            <div className='errors'>Mobile number cannot be empty!</div>
          )}
          {messageEmptyError && (
            <div className='errors'>Message cannot be empty!</div>
          )}
          {!numberEmptyError && !messageEmptyError && (
            <div className='errors-null'>.</div>
          )}
          <div className='search_contact app'>
            <TextField
              error={numberEmptyError}
              label='Mobile Number'
              placeholder='Mobile Number'
              name='mobileNumber'
              value={mobileNumber}
              onChange={onChange}
              size='small'
              style={{
                margin: "1em 0em",
              }}
              required
            />
          </div>
          <div className='message app' style={{ marginTop: "1.5em" }}>
            <TextField
              multiline
              maxRows={4}
              label='Message'
              placeholder='Hi! Sending a message from React....'
              size='small'
              inputProps={{
                style: {
                  width: "230px",
                  height: "90px",
                },
                maxLength: CHARACTER_LIMIT,
              }}
              FormHelperTextProps={{
                style: {
                  margin: 0,
                  padding: "0 0 0 5px",
                  fontSize: 10,
                },
              }}
              name='message'
              value={message}
              onChange={onChange}
              required
              error={message.length > CHARACTER_LIMIT - 1 || messageEmptyError}
              helperText={
                !(message.length > CHARACTER_LIMIT - 1)
                  ? `${message.length}/${CHARACTER_LIMIT}`
                  : "Max length exceeded"
              }
            />
          </div>
          <div style={{ marginTop: "1.5em" }}>
            <Button
              onClick={onSubmit}
              variant='outlined'
              color='success'
              size='small'
            >
              Send
            </Button>
          </div> */}