import styled from '@emotion/styled';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme.ts';
import { Tipografia } from '../../componentes/Tipografia';
import { Botao } from '../../componentes/Botao';
import { Box, Tab, Tabs, TextField } from '@mui/material';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import EventList from './components/EventList/index.jsx';
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
  padding: 30px;
`
const EventsListContainer = styled(Box)`
  display: flex;
  border-radius: 5px;
  padding: 15px 20px;
  flex-direction: column;
  margin: 10px 0;
  overflow: hidden;
  height: auto;
  background-color: ${props => props.backgroundcolor};
`
const StyledTabs = styled(Tabs)`
    padding: 0;
`
const StyledTab = styled(Tab)`
    padding: 0;
    font-weight: 400;
`
const StyledPrintButton = styled(Botao)`
    margin: 10px;
`

function Eventos() {
  const [tabValue, setTabValue] = useState(0);
  const eventList = [
    {
      id: uuidv4(),
      eventType: "15 anos",
      eventName: "Evento Legal",
      createdAt: '15-07-2025 21:01',
      model: 'Checklist 15 anos',
      tags: 'Assessoria parcial, Assessoria final',
      eventDate: '',
      status: 'in progress',
      checkList: 0,
      guests: 57
    },
    {
      id: uuidv4(),
      eventType: "Casamento",
      eventName: "Igor Alexandre & Lara Estefany",
      createdAt: '15-07-2025 21:01',
      model: 'Casamento',
      tags: 'Assessoria completa',
      eventDate: '15-07-2025',
      status: 'in progress',
      checkList: 0,
      guests: 108
    },
    {
      id: uuidv4(),
      eventType: "Formatura",
      eventName: "Terceirão Escola Imaculada",
      createdAt: '15-07-2025 21:01',
      model: 'Formatura',
      tags: 'Assessoria parcial',
      eventDate: '06-12-2014',
      status: 'completed',
      checkList: 0,
      guests: 325
    },
    {
      id: uuidv4(),
      eventType: "Casamento",
      eventName: "Jurema da Silva & Carlinhos Sauro",
      createdAt: '15-07-2025 21:01',
      model: 'Casamento',
      tags: 'Assessoria completa',
      eventDate: '15-07-2025',
      status: 'cancelled',
      checkList: 0,
      guests: 108
    },
    {
      id: uuidv4(),
      eventType: "Show",
      eventName: "Rammstein",
      createdAt: '15-07-2025 21:01',
      model: 'Show',
      tags: 'Assessoria completa',
      eventDate: '16-11-2025',
      status: 'in progress',
      checkList: 0,
      guests: 60000
    },
    {
      id: uuidv4(),
      eventType: "Formatura",
      eventName: "Estética 2026",
      createdAt: '15-07-2025 21:01',
      model: 'Formatura',
      tags: 'Assessoria completa',
      eventDate: '04-12-2026',
      status: 'completed',
      checkList: 0,
      guests: 412
    },
  ];
  let inProgressEvents = 0;
  let completedEvents = 0;
  let cancelledEvents = 0;

  function countRunningEvents() {
    eventList.forEach(event => {
      if(event.status === 'in progress') inProgressEvents++; 
      if(event.status === 'completed') completedEvents++;
      if(event.status === 'cancelled') cancelledEvents++;
    });
  }

  countRunningEvents();

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Box>
            <Tipografia variante="h4" componente="h4">Gestão de Eventos</Tipografia>
            <Tipografia variante="body1" componente="body1">Gestão de Eventos</Tipografia>
          </Box>
          <Botao style={{margin: '10px 0 0 0'}} variant={"contained"} onClick={() => {console.log("first")}}> Adicionar novo evento</Botao>
        </div>
        <EventsListContainer backgroundcolor={theme.palette.grey[50]}>
          <StyledTabs value={tabValue} onChange={(event, value) => setTabValue(value)}>
            <StyledTab label={`Em Andamento | ${inProgressEvents}`} {...a11yProps(0)} />
            <StyledTab style={{margin: '0 10px'}} label={`Concluído | ${completedEvents}`} {...a11yProps(1)} />
            <StyledTab style={{margin: '0 10px'}} label={`Cancelado | ${cancelledEvents}`} {...a11yProps(2)} />
          </StyledTabs>
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0 0 0'
            }}
          >
            <TextField sx={{flex: 1}} id="standard-basic" label="Buscar evento pelo nome" variant="standard"/>
            <StyledPrintButton variant={"outlined"}>
              <PrintOutlinedIcon />
            </StyledPrintButton>
            {/* <Botao variant={"contained"}>
                Mais Filtros
            </Botao> */}
          </Box>
					<EventList eventList={eventList} tabValue={tabValue}/>
        </EventsListContainer>
      </ThemeProvider>
    </Container>
  )
}

export default Eventos