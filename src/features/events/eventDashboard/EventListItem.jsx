import React from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

const EventListItem = ({event}) => {

  const {title, description, venue, hostPhotoURL, attendees, hostedBy, date} = event;

  return (
    <Segment.Group>

      <Segment>

        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description>
                Hosted by {hostedBy}
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>

      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> date
          <Icon name='marker' /> {venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {
            attendees.map(a => (
              <EventListAttendee key={a.id} attendee={a} />
            ))
          }
        </List>
      </Segment>

      <Segment clearing>
        <span>{description}</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>

    </Segment.Group>
  );
}
 
export default EventListItem;