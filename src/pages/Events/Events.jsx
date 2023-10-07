import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { fetchEvents } from 'servises/eventsAPI';

// in this component we passed props state (for object location)
// into Link - ready-made component provided by react-router-dom
// state = {{from: location}} - we create this object ourselves
// so here we passed to the state value location (of this particular page) to property "from "
// we want to indicate: 'this is the page we want to return to'
// state{
// from: location,
// }
export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`${event.id}`} state= {{from: location }}>{event.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet/>
    </>
  );
};
