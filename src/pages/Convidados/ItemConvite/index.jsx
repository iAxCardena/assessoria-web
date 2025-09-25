import styled from "@emotion/styled/macro"
import { Divider, Grid2, IconButton, Menu, MenuItem } from "@mui/material"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { COLOR_BLACK, COLOR_ERROR, COLOR_GREY, COLOR_SUCCESS, COLOR_WARNING } from '../../../theme.ts';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

const CardEstilizado = styled.li`
    padding: 10px;
    background-color: "#321321";
    display: block;
    &:hover {
        cursor: pointer;
    }
`
const TextoEstilizado = styled.p`
    margin: 0;
    color: ${(props) => props.color ? props.color : COLOR_BLACK};
`
const StyledPriorityHighIcon = styled(PriorityHighIcon)`
    width: 15px;
    height: 15px;
    padding: 5px;
    background-color: ${(props) => props.color ? props.color : COLOR_BLACK};
    border-radius: 50%;
    margin: 0 4px 0 -25px;
`
const StyledCheckIcon = styled(CheckIcon)`
    width: 15px;
    height: 15px;
    padding: 5px;
    background-color: ${(props) => props.color ? props.color : COLOR_BLACK};
    border-radius: 50%;
    margin: 0 4px 0 16px;
`
const StyledCloseIcon = styled(CloseIcon)`
    width: 15px;
    height: 15px;
    padding: 5px;
    background-color: ${(props) => props.color ? props.color : COLOR_BLACK};
    border-radius: 50%;
    margin: 0 4px 0 16px;
`
const StyledMenu = styled(Menu)`
	& .MuiPaper-root {
		background-color: ${COLOR_GREY[50]};
	}
`


export const ItemConvite = ({convite, onClick, onDeleteInvite, onAddGuest}) => {
    const [optionsMenuAnchor, setOptionsMenuAnchor] = useState(null);
	const open = Boolean(optionsMenuAnchor);

	const handleClick = (event) => {
		event.stopPropagation();
    	setOptionsMenuAnchor(event.currentTarget);
  	};

	const handleClose = (event) => {
		event.stopPropagation();
		setOptionsMenuAnchor(null);
	};

    let pendingGuests = 0
    let confirmedGuests = 0
    let canceledGuests = 0
    convite.guests.forEach(guest => {
        switch(guest.answer) {
            case "pending":
                pendingGuests += 1 
                break
            
            case "confirmed":
                confirmedGuests += 1
                break

            case "canceled":
                canceledGuests += 1
                break

            default:
                break
        }
    })

    const handleInvitationClick = () => {
        onClick(convite.id)
    }
	const handleAddGuestClick = (event) => {
		console.log('handleAddGuestClick')
		onAddGuest(convite.id)
		handleClose(event)
	}
	const handleCopyInviteUrlClick = (event) => {
		console.log('handleCopyInviteUrlClick (sei nem como vou fazer isso)')
		handleClose(event)
	}
	const handleDeleteInviteClick = (event) => {
		onDeleteInvite(event, convite.id)
	}

    return (
        <>
			<Divider/>
			<CardEstilizado onClick={() => handleInvitationClick()}>
				<Grid2 container spacing={{ xs: 2, md: 3 }}>
					<Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
						<TextoEstilizado>{convite.name}</TextoEstilizado>
						<TextoEstilizado color={"#908e8c"}>{convite.phone}</TextoEstilizado>
					</Grid2>
					<Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
						<TextoEstilizado>{convite.group != null ? convite.group : "-"}</TextoEstilizado>
					</Grid2>
					<Grid2 display={"flex"} alignItems={"center"} size={{ xs: 2, sm: 3, md: 3 }}>
						<StyledPriorityHighIcon color={COLOR_WARNING}/>
						{pendingGuests}
						<StyledCheckIcon color={COLOR_SUCCESS}/>
						{confirmedGuests}
						<StyledCloseIcon color={COLOR_ERROR}/>
						{canceledGuests}
					</Grid2>
					<IconButton onClick={handleClick}>
						<MoreHorizIcon />
					</IconButton>
					<StyledMenu
						id="positioned-menu"
						aria-labelledby="positioned-button"
						anchorEl={optionsMenuAnchor}
						open={open}
						onClose={handleClose}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
					>
						<MenuItem onClick={handleAddGuestClick}>Adicionar convidado</MenuItem>
						<MenuItem onClick={handleCopyInviteUrlClick}>Copiar link de RSVP</MenuItem>
						<MenuItem onClick={handleDeleteInviteClick}>Remover convite</MenuItem>
					</StyledMenu>
				</Grid2>
			</CardEstilizado>
        </>
    )
}