import TabPanel from "../../../../componentes/TabPanel";
import EventItem from "../EventItem";

function EventList({eventList, tabValue}) {
  return (
    <>
        <TabPanel value={tabValue} index={0}>
          {eventList.filter(event => event.status === 'in progress').map(event => <EventItem event={event}/>)}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          {eventList.filter(event => event.status === 'completed').map(event => <EventItem event={event}/>)}  
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          {eventList.filter(event => event.status === 'cancelled').map(event => <EventItem event={event}/>)}
        </TabPanel>
    </>
  )
}

export default EventList