import styled from '@emotion/styled/macro';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from '../../theme.ts';
import { Botao } from "../Botao";

const StyledDialogTitle = styled(DialogTitle)`
    font-size: 28px;
    font-weight: bolder;
    text-align: center;
`
const StyledDialogContentText = styled(DialogContentText)`
    font-size: 18px;
    font-weight: 500;
`
const StyledBotao = styled(Botao)`
	border-radius: 10px;
`
const StyledDialogActions = styled(DialogActions)`
	display: flex;
  	justify-content: center;
`

export default function CustomAlertDialog({open, addInvitation, openGuestPopup, setOpen}) {
    const handleClose = () => {
      setOpen(false);
    };

	const handleSaveClick = (event) => {
		addInvitation(event);
		setOpen(false);
	}

	const handleAddGuestsClick = () => {
		setOpen(false);
		openGuestPopup();
	}
  
    return (
      <ThemeProvider theme={theme}>
        <Dialog
          open={open}
          onClose={handleClose}
          sx={{
            textAlign: 'center',
            '& .MuiPaper-root': {
                background: theme.palette.common.white
            }
          }}
          maxWidth={"sm"}
        >
          <StyledDialogTitle id="alert-dialog-title">
            Convite sem convidados
          </StyledDialogTitle>
          <DialogContent>
            <StyledDialogContentText id="alert-dialog-description">
              {`Você não adicionou nenhum convidado nesse convite, deseja salvar sem convidados?`}
            </StyledDialogContentText>
          </DialogContent>
          <StyledDialogActions>
            <StyledBotao variant={"outlined"} onClick={handleAddGuestsClick}>Adicionar convidados</StyledBotao>
            <StyledBotao variant={"contained"} onClick={(event) => handleSaveClick(event)} autoFocus>
              Salvar sem convidados
            </StyledBotao>
          </StyledDialogActions>
        </Dialog>
      </ThemeProvider>
    );
}
