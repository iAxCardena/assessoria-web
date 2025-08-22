import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Divider, Grid2 as Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../../../theme.ts';
import styled from '@emotion/styled';

const StyledProfileIcon = styled(AccountCircleOutlinedIcon)`
  display: flex;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  color: ${(props) => props.backgroundcolor};
`
// const StyledAddIcon = styled(AddIcon)`
//   display: flex;
//   background-color: ${props => props.backgroundcolor};
//   color: ${props => props.color};
//   border-radius: 25px;
// `

function EventItem({event}) {
  /**TODO tratar datas
   * comparar data do evento com o dia atual para exibir quantos dias faltam
   * se já passou da data exibir o botão Concluir Evento
   */
  const newDate = new Date(event.eventDate)
  console.log(newDate)
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={1}
        sx={{
          display: 'flex',
          padding: '10px',
          alignItems: 'center',
          ":hover": {
            backgroundColor: theme.palette.grey[100],
            cursor: 'pointer'
          }
        }}
      >
        <StyledProfileIcon backgroundcolor={theme.palette.grey[400]}/>
        <Grid size={{ sm: 3, md: 4, lg: 5 }}>
          <Box>
            <Typography variant='body1' sx={{fontWeight: '700', fontSize: '14px'}} color={theme.palette.grey[400]}>
              {event.eventType}
            </Typography>
            <Typography variant='body1' sx={{fontWeight: '700', lineHeight: '1'}}>
              {event.eventName}
            </Typography>
            <Typography variant='body1' sx={{fontSize: '12px', marginTop: '4px'}}>
              Criado em: {event.createdAt}
            </Typography>
            <Typography variant='body1' sx={{fontSize: '12px'}}>
              Modelo: {event.model}
            </Typography>
            <Typography variant='body1' sx={{fontSize: '12px'}}>
              Tags: {event.tags}
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ sm: 3, md: 3, lg: 4 }}>
          {event.eventDate !== '' 
            ?
            <>
              {/* <Typography variant='body1' sx={{fontSize: '12px'}}>Faltam X dias</Typography> */}
              <Typography variant='body1'>{event.eventDate}</Typography>
              <Typography variant='body1' sx={{fontSize: '12px', color: theme.palette.grey[500]}}>Terça</Typography>
              <Button sx={{display: 'flex', padding: 0, justifyContent: 'start'}} variant={"text"}>
                {event.status==='in progress' && <Typography
                  variant='body1' 
                  sx={{
                    fontSize: '12px',
                    padding: 0,
                    fontWeight: 700,
                    textAlign: 'start'
                  }}
                >
                  Concluir evento
                </Typography>}
              </Button>
            </> 
            : <Typography variant='body1'>Sem data</Typography>}
        </Grid>
        {/* <Grid size={{ sm: 1, md: 1, lg: 2 }}>
          <StyledAddIcon backgroundcolor={theme.palette.grey[200]} color={theme.palette.text.primary}/>
        </Grid> */}
        <Grid size={{ sm: 2, md: 2, lg: 1 }}>
          <Typography variant='body1'>0 de {event.guests}</Typography>
          <Typography variant='body1' sx={{color: theme.palette.grey[500]}}>concluídas</Typography>
        </Grid>
        <Grid size={{ sm: 1, md: 1, lg: 1 }}>
          <Typography variant='body1'>0 de {event.guests}</Typography>
          <Typography variant='body1' sx={{color: theme.palette.grey[500]}}>confirmados</Typography>
        </Grid>
      </Grid>
      <Divider />
    </ThemeProvider>
  )
}

export default EventItem