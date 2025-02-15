import { Dialog, DialogContent, DialogTitle, Grid2, IconButton, TextField } from "@mui/material"
import { Tipografia } from "../Tipografia"
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

const ModalContainer = styled.div`
    text-align: center;
`


export const ModalConvites = () => {
    const [open, openChange] = useState(false);

    const openPopup = () => {
        openChange(true)
    }

    const closePopup = () => {
        openChange(false)
    }

    return (
        <ModalContainer>
            <Dialog fullWidth open={open} onClose={closePopup}>
                <DialogTitle>
                    Adicionar convite
                    <IconButton style={{float:'right'}} onClick={closePopup}>
                        <CloseIcon color="primary"/>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <h3>Nome do convite*</h3>
                    <TextField variant="outlined" label="Ex.: Julia e familia"></TextField>
                    <Grid2 container spacing={0}>
                        <Grid2 size={{ xs: 1, sm: 3, md: 3 }}>
                            //TODO listaSuspença com DDI
                            <h3>DDI</h3>
                            <TextField variant="outlined" value="+55 "></TextField>
                        </Grid2>
                        <Grid2 size={{ xs: 1, sm: 3, md: 3 }}>
                            <h3>Celular com DDD</h3>
                            <TextField variant="outlined" label="00 999999999"></TextField>
                        </Grid2>
                        <Grid2 size={{ xs: 1, sm: 3, md: 3 }}>
                            //TODO listaSuspença com Grupos existentes
                            <h3>DDI</h3>
                            <TextField variant="outlined" label="Ex.: Julia e familia"></TextField>
                        </Grid2>
                    </Grid2>
                </DialogContent>
            </Dialog>
        </ModalContainer>
    )
}