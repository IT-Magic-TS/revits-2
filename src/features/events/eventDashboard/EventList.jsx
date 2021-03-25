import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({events}) => {
  
  return ( 
    <>
      {
        events.map(e => (
          <EventListItem event={e} key={e.id} />
        ))
      }
    </>
  );
}
 
export default EventList;