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
const StyledIcon = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	& > * {
		color: ${props => props.backgroundcolor};
		width: 150px;
		height: 150px;
	}
`

export default function CustomAlertDialog({open, icon, title, message, cancelButtonText, confirmButtonText, onCancel, onConfirm, setOpen}) {
    const handleClose = () => {
      setOpen(false);
    };

	const handleConfirmClick = (event) => {
		onConfirm(event);
		setOpen(false);
	}

	const handleCancelClick = () => {
		setOpen(false);
		onCancel();
	}
  
    return (
      <ThemeProvider theme={theme}>
        <Dialog
		  fullWidth
          open={open}
          onClose={handleClose}
          sx={{
            textAlign: 'center',
            '& .MuiPaper-root': {
                background: theme.palette.common.white,
				padding: '10px'
            }
          }}
          maxWidth={"sm"}
        >
			{icon!=null && 
				<StyledIcon backgroundcolor={theme.palette.primary.light}>
					{icon}
				</StyledIcon>
			}
			<StyledDialogTitle id="alert-dialog-title">
				{title}
			</StyledDialogTitle>
			{message && <DialogContent>
				<StyledDialogContentText id="alert-dialog-description">
				{message}
				</StyledDialogContentText>
			</DialogContent>}
			<StyledDialogActions>
				<StyledBotao variant={"outlined"} onClick={handleCancelClick}>{cancelButtonText}</StyledBotao>
				<StyledBotao variant={"contained"} onClick={(event) => handleConfirmClick(event)} autoFocus>
				{confirmButtonText}
				</StyledBotao>
			</StyledDialogActions>
        </Dialog>
      </ThemeProvider>
    );
}
